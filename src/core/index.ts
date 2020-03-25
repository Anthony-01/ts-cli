import proxy from '../util/index'
export function createVue() {
    const vm = new Object();
    Object.defineProperty(vm, '_data', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: {
            message: "hello",
            name: "Anthony"
        }
    });
    const dates = vm["_data"];
    Object.keys(dates).forEach(key => {
        proxy(vm, '_data', key);
    });

    return vm;
}