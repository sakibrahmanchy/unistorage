export default interface unistorage {
    listFiles();
    createDirectory(directory_name, parents);
    uploadFile(metadata);
}