import changingProfileTmp from "../changingProfileData/changingProfileData.hbs";
import * as classes from "./changingProfileData.module.scss";
import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";
import {backButton} from "../../component/base/buttons/backButton/backButton";
import {imageTmp} from "../../component/base/image/image";
import union from "../../../static/img/Union.png";
import {profileInputTmp} from "../../component/base/input/profileInput/profileInput";
import {validInput} from "../../../static/validInput";

const {
    first_name,
    second_name,
    nickname,
    email,
    phone,
    logins} = validInput

const changingProfile = changingProfileTmp({
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
            name: "email",
            placeholder: "pochta@yandex.ru",
            regex: email.regex,
            required: email.required,
        }),
        profileInputTmp({
            name: "login",
            placeholder: "ivanivanov",
            regex: logins.regex,
            required: logins.required,
            autofocus: logins.autofocus,
        }),
        profileInputTmp({
            name: "first_name",
            placeholder: "Иван",
            regex: first_name.regex,
            required: first_name.required,
            autofocus: first_name.autofocus,
        }),
        profileInputTmp({
            name: "second_name",
            placeholder: "Иванов",
            regex: second_name.regex,
            required: second_name.required,
            autofocus: second_name.autofocus
        }),
        profileInputTmp({
            name: "nickname",
            placeholder: "Иван",
            regex: nickname.regex,
            required: nickname.required,
        }),
        profileInputTmp({
            name: "phone",
            placeholder: "+7 (909) 967 30 30",
            regex: phone.regex,
            required: phone.required,
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
    bodyElement.innerHTML = changingProfile;
}
