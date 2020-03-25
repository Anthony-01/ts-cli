const sharedObjectOptions = {
    configurable: true,
    enumerable: true,
    get: undefined,
    set: undefined
};

export default function proxy(target: Object, sourceKey: string, key: string) {
    sharedObjectOptions.get = function() {
        return this[sourceKey][key];
    }
    sharedObjectOptions.set = function(val) {
        this[sourceKey][key] = val;
    }
    Object.defineProperty(target, key, sharedObjectOptions);
}