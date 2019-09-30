var express = require('express');
var router = express.Router();
var Gdrive = require('../bin/storage/Gdrive.ts')
/* GET users listing. */
router.get('/', function(req, res, next) {
  const config = {
    client_id: '581142780576-iqerokolg586c4stpv3kjusvj2eqc221.apps.googleusercontent.com',
    client_secret: 'KnUbDh7rZ3bzLOC8mQRLQHgT',
    redirect_uri: 'urn:ietf:wg:oauth:2.0:oob'
  };
  const gdrive = new Gdrive(config);
  console.log(gdrive);
  res.send('respond with a resource');
});

module.exports = router;
