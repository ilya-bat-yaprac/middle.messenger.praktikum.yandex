import tpl from './index.hbs'

console.log(tpl);

const res = tpl({
    name: "Ilya"
})

const rootElement = document?.getElementById('root');
if (rootElement) {
    rootElement.innerHTML = res;
}
