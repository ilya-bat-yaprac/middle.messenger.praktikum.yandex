import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";
import {authInputTmp} from "../../component/base/input/authInput/authInput";
import loginTmp from "./login.hbs";
import * as classes from "./login.module.scss";
import {linkTmp} from "../../component/base/link/link";
import {validInput} from "../../../static/validInput";

const {
    logins,
    password} = validInput

const login = loginTmp({
    form: classes.form,
    loginInput: authInputTmp({
        name: "Логин",
        regex: logins.regex,
        required: logins.required,
        autofocus: logins.autofocus,
    }),
    passwordInput: authInputTmp({
        name: "Пароль",
        type: "password",
        regex: password.regex,
        required: password.required,
    }),
    bottom: `      
             <div class="${classes.divButton}">
                ${submitButtonTmp({
                    text: "Войти",
                })}              
                ${linkTmp({
                    text: "Нет аккаунта?",
                    ref: "/pages/registration/registration.html",
                })}              
             </div>         
    `
})


const bodyElement = document?.querySelector('body');
if (bodyElement) {
    bodyElement.innerHTML = login;
}
