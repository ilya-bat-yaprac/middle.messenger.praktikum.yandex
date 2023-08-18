import profileTmp from "../profile/profile.hbs";
import * as classes from "../profile/profile.module.scss";
import {linkTmp} from "../../component/base/link/link";
import union from "../../../static/img/Union.png"
import {backButton} from "../../component/base/buttons/backButton/backButton";
import {imageTmp} from "../../component/base/image/image";
import {profileInputTmp} from "../../component/base/input/profileInput/profileInput";
import {validInput} from "../../../static/validInput";

const {
    first_name,
    second_name,
    nickname,
    email,
    phone,
    logins} = validInput

const profile = profileTmp({
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
            disabled: true,
            name: "Почта",
            placeholder: "pochta@yandex.ru",
            regex: email.regex,
            required: email.required,
        }),
        profileInputTmp({
            disabled: true,
            name: "Логин",
            placeholder: "ivanivanov",
            regex: logins.regex,
            required: logins.required,
            autofocus: logins.autofocus
        }),
        profileInputTmp({
            disabled: true,
            name: "Имя",
            placeholder: "Иван",
            regex: first_name.regex,
            required: first_name.required,
            autofocus: first_name.autofocus
        }),
        profileInputTmp({
            disabled: true,
            name: "Фамилия",
            placeholder: "Иванов",
            regex: second_name.regex,
            required: second_name.required,
            autofocus: second_name.autofocus
        }),
        profileInputTmp({
            disabled: true,
            name: "Имя в чате",
            placeholder: "Иван",
            regex: nickname.regex,
            required: nickname.required,
        }),
        profileInputTmp({
            disabled: true,
            name: "Телефон",
            placeholder: "+7 (909) 967 30 30",
            regex: phone.regex,
            required: phone.required,
        })],
    bottom: `<div class="${classes.divLink}">
                ${linkTmp({
                    text: "Изменить данные",
                    ref: "../changingProfileData/changingProfileData.html",
                    linkClassName: classes.blueLinkClassName,
                })}
                ${linkTmp({
                    text: "Изменить пароль",
                    ref: "../changingPassword/changingPassword.html",
                    linkClassName: classes.blueLinkClassName,
                })}
                ${linkTmp({
                    text: "Выйти",
                    ref: "../login/login.html",
                    linkClassName: classes.redLinkClassName,
                })}
            </div>`
})

const bodyElement = document?.querySelector('body');
if (bodyElement) {
    bodyElement.innerHTML = profile;
}
