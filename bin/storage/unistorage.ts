export default abstract class unistorage {
    protected config;
    protected constructor(config) {
        this.config = config;
    }

    abstract connect();
    abstract createDirectory(metadata);
    abstract uploadFile(metadata);
}