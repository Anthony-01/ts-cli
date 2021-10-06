import {createVue} from "./core/index";

const vm = createVue();
console.log("测试");
for (let key in vm) {
    console.log(`${key}: ${vm[key]}`);
}