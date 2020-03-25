import {createVue} from "./core/index";

const vm = createVue();
for (let key in vm) {
    console.log(`${key}: ${vm[key]}`);
}