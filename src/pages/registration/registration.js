import registrationTmp from "./registration.hbs"
import * as classes from "./registartion.module.scss";
import {authInputTmp} from "../../component/base/input/authInput/authInput";
import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";
import {linkTmp} from "../../component/base/link/link";


const registration = registrationTmp({
    form: classes.form,
    emailInput: authInputTmp({
        name: "Почта",
    }),
    nameInput: authInputTmp({
        name: "Имя",
    }),
    surNameInput: authInputTmp({
        name: "Фамилия",
    }),
    phoneInput: authInputTmp({
        name: "Телефон",
    }),
    passwordInput: authInputTmp({
        name: "Пароль",
    }),
    resetPasswordInput: authInputTmp({
        name: "Пароль (ещё раз)",
    }),
    bottom: `      
             <div class="${classes.divButton}">
                ${submitButtonTmp({
                    text: "Зарегистрироваться",
                 })}              
                ${linkTmp({
                    text: "Войти",
                    ref: "/login",
                })}              
             </div>         
    `
})

document.querySelector('body').innerHTML = registration;