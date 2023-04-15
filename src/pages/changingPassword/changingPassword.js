import {authInputTmp} from "../../component/base/input/authInput/authInput";
import changingPasswordTmp from "../changingPassword/changingPassword.hbs";
import * as classes from "../changingPassword/changingPassword.module.scss";
import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";

const changingPassword = changingPasswordTmp({
    form: classes.form,
    image: `<img class="${classes.image}" src="../../../static/img/Union.png" alt="Photo">`,
    oldPassword: authInputTmp({
       name: "Старый пароль",
       placeholder: "•••••••••••",
    }),
    newPassword: authInputTmp({
       name: "Новый пароль",
       placeholder: "•••••••••••",
    }),
    doubleNewPassword: authInputTmp({
       name: "Повторите новый пароль",
       placeholder: "•••••••••••",
    }),
    bottom: `<div class="${classes.divButton}">
                ${submitButtonTmp({
                    text: "Сохранить",
                    ref: "/profile"
                })}
            </div>`
})

document.querySelector('body').innerHTML = changingPassword;