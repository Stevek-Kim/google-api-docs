// npm install - whole googleapis
$ npm install googleapis

// import as Obj
const {google} = require('googleapis');


const auth = new google.auth.GoogleAuth({  keyFile: "credentials.json",  scopes: "https://www.googleapis.com/auth/spreadsheets", });

const {google} = require('googleapis');
