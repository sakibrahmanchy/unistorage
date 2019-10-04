import { formatClassName } from '../helpers';
import GoogleDrive from '../storage/google-drive/google-drive';

const classes = {
    GoogleDrive
};

export default class ClassResolver {
    private readonly className: string;
    constructor(className) {
        this.className = formatClassName(className);
    }

    resolve() {
        return new classes[this.className]();
    }
}