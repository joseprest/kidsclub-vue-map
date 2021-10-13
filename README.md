# cottageclass-map

This is the Vue.js frontend for http://www.kidsclub.io. 

##Setup
* make sure you're using the right version of npm and of python
First run :

```npm install```

## Running locally

To run locally with hot reloading:

```sh
npm run dev
```

## Deploying

Changes to master will auto deploy to Heroku. Once staging has been QA'd, deploy to production **directly from source**.  Ie. do not use the "push to production" feature in heroku pipelines becuase environment variables will not be set in the javascript.  Namely `GOOGLE_ANALYTICS_ID` is fetched during the webpacker phase and that is baked in the js that is deployed.  

## Testing locally with Express.js

If you need to test how the production server will behave without pushing to master and testing on staging, you can start the express server locally with
You will need to first build the app once with
```sh
npm run build
```
and then, to serve the built files:

 ```sh
 npm run start
 ```

## Testing locally on mobile devices

To test locally on machines other than your development machine, we currently take the following steps:

1. determine the local IP of your dev machine is (e.g. 192.168.0.4) and add that to the [Valid OAuth Redirect URIs] in the Facebook developer settings, in the form e.g. `192.168.0.4:8077/oauth-callback` (depending on your IP and port). (Otherwise, you will not be able to login on the device.)

2. add the line `host: '0.0.0.0'` to the devServer object in `config/webpack.dev.conf.js`. (Otherwise your local dev server will not accept the incoming connection.)

(We may wish to make this second change permanent and find a solution that doesn't require us to modify the facebook settings every time we happen to use a device with a new local IP.)

## Basic QA workflow before deploy

CORE FUNCTIONALITY
* user with a fb account can login
* user with email can login
* user can create account with email
* user can create account with facebook
* logged-in user can rsvp
* not-logged-in user can rsvp after logging (via rsvp route)
* not-logged-in user can rsvp after signing up (via rsvp route)
* User can browse events (logged in, not)
* All links in navigation work (logged in, not)
* All individual event pages linked to from the front page load. 
