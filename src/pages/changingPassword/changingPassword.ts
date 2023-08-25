import changingPasswordTmp from "../changingPassword/changingPassword.hbs";
import * as classes from "../changingPassword/changingPassword.module.scss";
import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";
import {backButton} from "../../component/base/buttons/backButton/backButton";
import {imageTmp} from "../../component/base/image/image";
import union from "../../../static/img/Union.png";
import {profileInputTmp} from "../../component/base/input/profileInput/profileInput";

console.log(typeof union)

const changingPassword = changingPasswordTmp({
    backButton: backButton,
    containerClass: classes.container,
    formClass: classes.form,
    image: imageTmp({
        imageSrc: union,
        imageAlt: "Photo",
        imageContainerClass: classes.imageContainer,
        imageClass: classes.image,
    }),
    inputs: [
        profileInputTmp({
            type: "password",
            name: "Старый пароль",
            placeholder: "•••••••••",
        }),
        profileInputTmp({
            type: "password",
            name: "Новый пароль",
            placeholder: "•••••••••••",
        }),
        profileInputTmp({
            type: "password",
            name: "Повторите новый пароль",
            placeholder: "•••••••••••",
        })],
    bottom: `<div class="${classes.divButton}">
                ${submitButtonTmp({
                    text: "Сохранить",
                    ref: "/profile"
                })}
            </div>`
})

const bodyElement = document?.querySelector('body');
if (bodyElement) {
    bodyElement.innerHTML = changingPassword;
}
