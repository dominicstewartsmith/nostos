import axios from 'axios';
import { SmallEntry } from '../../client-types/SmallEntry';
import { updateFilterPreference } from '../../slices/userSlice';


const base_url = `http://${process.env.EXPO_PUBLIC_IP_ADDRESS}:3000`

const cityFetcher = (cityName: String, setter: React.Dispatch<React.SetStateAction<(SmallEntry & {avg: number})[]>>) => {
  const rawentries = axios.get<SmallEntry[]>(`${base_url}/entry/getMany/byCity/${cityName}`)
  const avgs = axios.get<{entryId: number, _avg: {value: number}}[]>(`${base_url}/rating/AveragesForCity/${cityName}`)
  
  Promise.all([rawentries, avgs]).then(([rawentries, avgs]) => {
    setter(rawentries.data.map((entry) => {
      return {...entry, avg: avgs.data.find(a => a.entryId == entry.id)?._avg.value || 0}
    }))
  }).catch((err) => {
    console.log(err)
  })
}

const placeFetcher = (placeId: number, setter: React.Dispatch<React.SetStateAction<(SmallEntry & {avg: number})[]>>) => {
  const rawentries = axios.get<SmallEntry[]>(`${base_url}/entry/getMany/byPlace/${placeId}`)
  const avgs = axios.get<{entryId: number, _avg: {value: number}}[]>(`${base_url}/rating/AveragesForPlace/${placeId}`)
  
  Promise.all([rawentries, avgs]).then(([rawentries, avgs]) => {
    setter(rawentries.data.map((entry) => {
      return {...entry, avg: avgs.data.find(a => a.entryId == entry.id)?._avg.value || 0}
    }))
  }).catch((err) => {
    console.log(err)
  })
}

const updatePrefrence = (newPrefrence: string, dispatch: any, userId: number) => {
  axios.put(`${base_url}/user/setUserFilterPreference/${userId}`, {filter_preference: newPrefrence}).then(() => {
    dispatch(updateFilterPreference(newPrefrence))
  }).catch((err) => {
    console.log(err)
  })
}

export {cityFetcher, updatePrefrence, placeFetcher}