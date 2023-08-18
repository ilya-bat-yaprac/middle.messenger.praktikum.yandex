import registrationTmp from "./registration.hbs"
import * as classes from "./registartion.module.scss";
import {authInputTmp} from "../../component/base/input/authInput/authInput";
import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";
import {linkTmp} from "../../component/base/link/link";
import {validInput} from "../../../static/validInput";

const {
    first_name,
    second_name,
    email,
    phone,
    password} = validInput

const registration = registrationTmp({
    form: classes.form,
    emailInput: authInputTmp({
        name: "Почта",
        regex: email.regex,
    }),
    nameInput: authInputTmp({
        name: "Имя",
        regex: first_name.regex,
    }),
    surNameInput: authInputTmp({
        name: "Фамилия",
        regex: second_name.regex,
    }),
    phoneInput: authInputTmp({
        name: "Телефон",
        regex: phone.regex,
    }),
    passwordInput: authInputTmp({
        name: "Пароль",
        type: "password",
        regex: password.regex,
    }),
    resetPasswordInput: authInputTmp({
        name: "Пароль (ещё раз)",
        type: "password",
        regex: password.regex,
    }),
    bottom: `      
             <div class="${classes.divButton}">
                ${submitButtonTmp({
                    text: "Зарегистрироваться",
                 })}              
                ${linkTmp({
                    text: "Войти",
                    ref: "/pages/login/login.html",
                })}              
             </div>         
    `
})

const bodyElement = document?.querySelector('body');
if (bodyElement) {
    bodyElement.innerHTML = registration;
}
