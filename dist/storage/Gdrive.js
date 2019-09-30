"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("./storage");
const { google } = require('googleapis');
class Gdrive extends storage_1.default {
    constructor(config) {
        super(config);
    }
    connect() {
        if (!this.config.client_id || !this.config.client_secret || !this.config.redirect_uri || !this.config.token_path)
            throw new Error("Required configurations missing for google drive auth");
        try {
            const oAuth2Client = new google.auth.OAuth2(this.config.client_id, this.config.client_secret, this.config.redirect_uri);
            const drive = google.drive({ version: 'v3', oAuth2Client });
            console.log(drive);
        }
        catch (e) {
            throw new Error("Error connecting to google drive.s");
        }
    }
    createDirectory(metadata) {
    }
    uploadFile(metadata) {
    }
}
exports.default = Gdrive;
//# sourceMappingURL=Gdrive.js.map