import {submitButtonTmp} from '../../component/base/buttons/submitButton/submitButton';
import {authInputTmp} from '../../component/base/input/authInput/authInput';
import loginTmp from "./login.hbs";
import * as classes from "./login.module.scss";
import {linkTmp} from '../../component/base/link/link';
import {handleFormSubmit} from "@/utils/utils";

const login = loginTmp({
    form: classes.form,
    id: 'login-form',
    loginInput: authInputTmp({
        name: "Логин",
    }),
    passwordInput: authInputTmp({
        name: "Пароль",
        type: "password",
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

const applicantForm = document.getElementById('login-form');
applicantForm.addEventListener('submit', handleFormSubmit)