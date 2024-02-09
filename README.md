# NOSTOS - The Concept

Nostos is a community based app focussed around visiting locations in the real world and then writing about your perceptions of the places you go to. The app is framed around a sci-fi theme, with the user taking on the role of an alien researcher visiting Earth.

On opening the map the user is presented with several points of interest to visit. After selecting one they will not be able to proceed until physically within a 100m radius of the point (using native GPS tracking). Once at said location, the user is able to write an entry log for this place, being prompted to look around and engage, writing some meaningful content.

Other users are then able to rate and comment on these entries and receive awards for interacting with the app.

# The Tech

Front-end  
React Native in Typescript  
Google Places API for map interactions and place generation  

Back-end:  
Jest with Supertest  
Prisma for database interactions  
AWS for database hosting  

Figma and Trello for design and task management.  

# The Creators

This project was created in two-weeks by the following contributors:

[Andre Pangoni](https://github.com/andreeeeh),  
[Diego Saborido](https://github.com/diegoss-github),  
[Dana Yachini](https://github.com/DanaYachini),  
[Andrew MacShane](https://github.com/amacsha),  
and myself, [Dominic Stewart-Smith](https://github.com/dominicstewartsmith).  

# Screenshots
![alt](/screenshots/ship-view.png)
![alt](/screenshots/world-map.png)
![alt](/screenshots/entry-list.png)
![alt](/screenshots/new-entry.png)
![alt](/screenshots/entry-view.png)
![alt](/screenshots/profile-page.png)

# Instructions for running

in /server you will need an .env file containing the URI to a Postgres database, and a Google Place API secret key.
in /client you will need an .env file 



