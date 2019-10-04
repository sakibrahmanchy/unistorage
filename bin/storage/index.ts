import ClassResolver from "../resolver/class-resolver";

export default class storage {
    strategy: string;
    constructor(strategy) {
        this.strategy = strategy;
    }

    public get() {
       return new ClassResolver(this.strategy).resolve();
    }
}