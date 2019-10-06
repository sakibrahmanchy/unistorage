# unistorage
A simple storage management system for multiple file storage providers

## Description
A typescript module intended to integrate several storage systems ( Google Drive, One Drive, Google Storage, AWS S3 buckets etc.) 
in a single platform.

## Install 
Run `npm install unistorage`

## Usage
#####Typescript
`import { unistorage } from unistorge;`

`const storage = unistorge('google-drive');'`

#####Regular

`var { unistorage } = require('unistorage');`

`var storage = unistorge('google-drive');'`

#####Implementation
`//storage.ListFiles().then()....`

`//storage.createDirectory().then()....`

## Test 

Run `npm run test`