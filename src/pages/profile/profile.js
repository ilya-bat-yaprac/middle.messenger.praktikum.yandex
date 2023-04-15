import {inputTmp} from "../../component/base/input/authInput/authInput";
import profileTmp from "../profile/profile.hbs";
import * as classes from "../profile/profile.module.scss";
import {linkTmp} from "../../component/base/link/link";
import union from "../../../static/img/Union.png"
import {backButton} from "../../component/base/buttons/backButton/backButton";
import {imageTmp} from "../../component/base/image/image";

const profile = profileTmp({
    backButton: backButton,
    form: classes.form,
    image: imageTmp({
        imageSrc: union,
        imageAlt: "Photo",
        imageContainerClass: classes.imageContainer,
        imageClass: classes.image,
    }),
    inputs: [
        inputTmp({
            name: "Почта",
            placeholder: "pochta@yandex.ru",
        }),
        inputTmp({
            name: "Логин",
            placeholder: "ivanivanov",
        }),
        inputTmp({
            name: "Имя",
            placeholder: "Иван",
        }),
        inputTmp({
            name: "Фамилия",
            placeholder: "Иванов",
        }),
        inputTmp({
            name: "Имя в чате",
            placeholder: "Иван",
        }),
        inputTmp({
            name: "Телефон",
            placeholder: "+7 (909) 967 30 30",
        })],
    bottom: `
            <div class="${classes.divLink}">
                <div class="${classes.divLinkItem}">
                    ${linkTmp({
        text: "Изменить данные",
        ref: "../changingProfileData/changingProfileData.html",
    })}
                </div>
                <div class="${classes.divLinkItem}">
                    ${linkTmp({
        text: "Изменить пароль",
        ref: "../changingPassword/changingPassword.html",
    })}
                </div>
                <div class="${classes.divLinkItem}">
                    ${linkTmp({
        text: "Выйти",
        ref: "../login/login.html",
    })}
                </div>
            </div>`
})

document.querySelector('body').innerHTML = profile;