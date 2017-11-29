const functions = require('firebase-functions');
const admin = require('firebase-admin');
try {admin.initializeApp(functions.config().firebase);} catch(e) {} // You do that because the admin SDK can only be initialized once.
const corsFn = require("../helpers/cors");

exports = module.exports = functions.https.onRequest((req, res) => {
    corsFn(req, res, function () {
        // add here stuff
    });
});