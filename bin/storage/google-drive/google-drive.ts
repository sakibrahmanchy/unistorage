import unistorage from "../unistorage";
const {google} = require('googleapis');
import fs from 'fs';
import Client from "./client";

export default class GoogleDrive implements unistorage {
    private client:Client;

    constructor() {
        this.client = new Client();
    }

    async listFiles() {
        return await this.client.request({
            url: 'https://www.googleapis.com/drive/v3/files',
            method: 'GET'
        });
    }

    async createDirectory(directory_name, parents = []) {
        return await this.client.request({
            url: 'https://www.googleapis.com/drive/v3/files',
            method: 'POST',
            options: {
                body: {
                    'name': directory_name,
                    'mimeType': 'application/vnd.google-apps.folder',
                    'parents': parents
                }
            }
        });
    }

    uploadFile(metadata) {
    }

}