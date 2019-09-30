export default abstract class storage {
    protected config;
    constructor(config) {
        this.config = config;
    }

    abstract connect();
    abstract createDirectory(metadata);
    abstract uploadFile(metadata);
}