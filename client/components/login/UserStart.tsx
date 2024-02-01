import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Register from "../register/Register";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Main from "../dashboard/Main";
import Mission from "../mission/Mission";
import { NavigationContainer } from "@react-navigation/native";
import Location from "../dashboard/Location";
import EntryView from "../entry-view/EntryView";
import NewEntryForm from "../new-entry/NewEntryForm";
import NewComment from "../entry-view/NewComment";

const Stack = createNativeStackNavigator();

export default function UserStart() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Mission" component={Mission} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="EntryView" component={EntryView} />
            <Stack.Screen name="NewEntryForm" component={NewEntryForm} />
            <Stack.Screen name="New Comment" component={NewComment} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
