import registrationTmp from "./registration.hbs"
import * as classes from "./registartion.module.scss";
import {inputTmp} from "../../component/base/input/authInput/authInput";
import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";
import {linkTmp} from "../../component/base/link/link";


const registration = registrationTmp({
    form: classes.form,
    emailInput: inputTmp({
        name: "Почта",
    }),
    nameInput: inputTmp({
        name: "Имя",
    }),
    surNameInput: inputTmp({
        name: "Фамилия",
    }),
    phoneInput: inputTmp({
        name: "Телефон",
    }),
    passwordInput: inputTmp({
        name: "Пароль",
    }),
    resetPasswordInput: inputTmp({
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