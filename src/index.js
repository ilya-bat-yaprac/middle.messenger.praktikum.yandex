import tpl from './index.hbs';

const res = tpl({
  name: 'Ilya',
});

document.getElementById('root').innerHTML = res;
