import tpl from './index.hbs'

console.log(tpl);

const res = tpl({
    name: "Ilya"
})

document.getElementById('root').innerHTML = res;
