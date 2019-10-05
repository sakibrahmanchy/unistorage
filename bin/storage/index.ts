import ClassResolver from "../resolver/class-resolver";
import strategies from "../resolver/strategies";

export default class storage {
    strategy: string;
    constructor(strategy) {
        if (!strategies.includes(strategy)) {
            throw new Error('Strategy not implemented');
        }
        this.strategy = strategy;
    }

    public get() {
       return new ClassResolver(this.strategy).resolve();
    }
}