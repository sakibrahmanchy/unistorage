import storage from './bin/storage';

export const unistorage = (strategy) => {
    return new storage(strategy).get();
};