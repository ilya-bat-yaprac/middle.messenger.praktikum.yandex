import headTmp from '../../component/base/head.hbs'
import submitButtonTmp from '../../component/base/buttons/submitButton/template.hbs'
import './login.module.scss'

console.log(headTmp);

const head = headTmp({
    title: "Login",
})

const button = submitButtonTmp({
    text: "Login",
})

document.querySelector('head').innerHTML = head;
document.querySelector('body').innerHTML = button;
