import storage from "./storage";
const {google} = require('googleapis');

export default class Gdrive extends storage {
    constructor(config) {
        super(config);
    }

    connect() {
        if(!this.config.client_id || !this.config.client_secret || !this.config.redirect_uri || !this.config.token_path)
            throw new Error("Required configurations missing for google drive auth");
        try {
            const oAuth2Client = new google.auth.OAuth2( this.config.client_id, this.config.client_secret, this.config.redirect_uri);
            const drive = google.drive({version: 'v3', oAuth2Client});
            console.log(drive);
        } catch (e) {
            throw new Error("Error connecting to google drive.s");
        }
    }

    createDirectory(metadata) {
    }

    uploadFile(metadata) {
    }

}