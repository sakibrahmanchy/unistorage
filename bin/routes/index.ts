import Gdrive from "../storage/google-drive/Gdrive";

var express = require('express');
var router = express.Router();
const {auth} = require('google-auth-library');
const { GoogleToken } = require('gtoken');
import axios from 'axios';

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('here');
  res.render('index', { title: 'Express' });
});

var creds = {"installed":{"client_id":"581142780576-iqerokolg586c4stpv3kjusvj2eqc221.apps.googleusercontent.com","project_id":"legends-pos-254518","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"KnUbDh7rZ3bzLOC8mQRLQHgT","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}

router.get('/qp', function(req, res, next) {
    const gdrive = new Gdrive(null);
    gdrive.listFiles().then((res) => {
        console.log(res);
    })
});

async function getData(client, keys) {
    const url = `https://dns.googleapis.com/dns/v1/projects/${keys.project_id}`;
    console.log(url);
    const res = await client.request({url});
    console.log('DNS Info:');
    console.log(res.data);
    res.send('respond with a resource');
}

module.exports = router;
