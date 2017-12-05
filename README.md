Powwow App README.md


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





