import unistorage from "../unistorage";
const {google} = require('googleapis');
import fs from 'fs';
import Client from "./client";

export default class Gdrive extends unistorage {
    private client:Client;

    constructor(config) {
        super(config);
        this.client = new Client();
    }

    connect() {
        throw new Error("Method not implemented.");
    }

    async listFiles() {
        return await this.client.request({
            url: 'https://www.googleapis.com/drive/v3/files',
            method: 'GET'
        });
    }

    createDirectory(metadata) {
    }

    uploadFile(metadata) {
    }

}