# firebase-functions-started

# How to setup:
- make sure that you have the firebase sdk locally and that you are logged in.
- open `.firebaserc` and replace `insert-app-here` with the name of your firebase project
- if you need to use other Google Cloud Platform services you well need the Blaze plan.

# How to run functions locally:
- `yarn` in `/functions` project.
- create a local copy of env values: `firebase functions:config:get > .runtimeconfig.json` - run this in `/functions/functions` folder
- start the local server with: `firebase experimental:functions:shell`

# How to deploy:
- `firebase deploy --only functions`

#Package infos
- ajv - uses an object schema to validate the request so that we ensure that we do not recieve garbage
- axios - api calls
- cors - well you know what this one does :)
- glob - used in the breakdown on function to smaller files