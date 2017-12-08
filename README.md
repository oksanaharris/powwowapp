Powwow App README.md

Run npm install - 

Opening the Web-app from root:
Terminal Window #1:
cli: nodemon server/server.js - runs on localhost:9000
Terminal Window #2:
cli: npm start - react app runs on localhost:3000 - it will automaticall open the browser and load for you. proxy is set to 9000 to connect with the server.

Boiler-Plate setup:
Looking at Oxana's models/routes - I inserted the following to match:
Actions - 1:1 for each route/model
Reducers - 1:1 for each route/model/action

App Entry - src/index.js
App CSS Entry - src/index.css
App '/' starting route - src/containers/App/index.js
Reducer - src/reducers/index.js
Actions - src/actions/*
Server Entry - server/server.js port 9000


Database config setup steps:
1. pg-start
2. psql
3. CREATE DATABASE powwowdb;
4.\c powwowdb - to confirm
5.Change db.sync to true - add all the tables to DB


```json
{
  "development": {
    "database": "powwowdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```


Setting up Facebook OAuth, please follow the following steps to get this working on your computer:

- Setup an account via 'https://developers.facebook.com/'
- Log-in at https://developers.facebook.com/
- Click on My Apps
  - Click Add a new App
  - A pop-up should open up.
  - Enter a display name & email

- Click Dashboard
 - Copy App ID  - this will go in the config/env.keys.js file 'FACEBOOK_APP_ID'
 - Copy App Secret - this will go in the config/env.keys.js file 'FACEBOOK_APP_SECRET'

- Click Settings
  - Add Platform
    - Choose Website
    - Site Url: 'http://localhost/'
    - App Domains: 'localhost'
    - Click Save Changes

- Click App Review
  - Toggle: "Make 'Your App Name' public?"
    - Choose a category(your preference)
    - Confirm

- Click + Add Product
  - Selected Facebook Login
    - Go To Settings:
      - Ensure the following are toggled to Yes
        1. Client OAuth Login
        2. Web OAuth Login
        3. Embedded Browser OAuth Login
      - Enter in this address for 'Valid OAuth redirect URIs'
        - 'http://localhost:9000/auth/facebook/callback'
      - Click Save Changes

The above Steps were all within the browser, the following steps are within the code:

```json
{
  FACEBOOK_APP_ID: "facebook app id",
  FACEBOOK_APP_SECRET: 'facebook app secret',
  USER_TOKEN: 'Okay to leave blank for now',
  APP_TOKEN: 'Okay to leave blank for now',
  callback: 'http://localhost:9000/auth/facebook/callback'
}
```

1. Ensure you have pasted the APP ID and APP SECRET to your config file, also double check the file is not part of your commit.

2. Drop your database.

3. Go to http://localhost:9000/auth/facebook 
  - this will re-redirect you to facebook page where you will give your app permission
  - On your first attemept you will be redirected to /failed - as your user is new - this will change when routes have been defined.

4. Again go to http://localhost:9000/auth/facebook 
 - On your second attempt your user has now been found and will be redirected to /profile

5. All Steps complete for now.




