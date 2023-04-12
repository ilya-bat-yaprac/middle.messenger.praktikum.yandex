import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";
import {inputTmp} from "../../component/base/input/authInput/authInput";
import loginTmp from "./login.hbs";
import * as classes from "./login.module.scss";
import {linkTmp} from "../../component/base/link/link";


const login = loginTmp({
    form: classes.form,
    loginInput: inputTmp({
        name: "Логин",
    }),
    passwordInput: inputTmp({
        name: "Пароль",
    }),
    bottom: `      
             <div class="${classes.divButton}">
                ${submitButtonTmp({
                    text: "Войти",
                })}              
                ${linkTmp({
                    text: "Нет аккаунта?",
                    ref: "/registration",
                })}              
             </div>         
    `
})


document.querySelector('body').innerHTML = login;

