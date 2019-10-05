# unistorage
A simple storage management system for multiple file storage providers

## Description
A typescript module intended to integrate several storage systems ( Google Drive, One Drive, Google Storage, AWS S3 buckets etc.) 
in a single platform.

## Install 
Run `npm install unistorage`

## Usage
`import { unistorage } from unistorge;`

`var storage = unistorge('google-drive');'`

`//storage.ListFiles().then()....`

`//storage.createDirectory().then()....`

## Test 

Run `npm run test`