import profileTmp from "../profile/profile.hbs";
import * as classes from "../profile/profile.module.scss";
import {linkTmp} from "../../component/base/link/link";
import union from "../../../static/img/Union.png"
import {backButton} from "../../component/base/buttons/backButton/backButton";
import {imageTmp} from "../../component/base/image/image";
import {profileInputTmp} from "../../component/base/input/profileInput/profileInput";

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
            name: "Почта",
            placeholder: "pochta@yandex.ru",
        }),
        profileInputTmp({
            name: "Логин",
            placeholder: "ivanivanov",
        }),
        profileInputTmp({
            name: "Имя",
            placeholder: "Иван",
        }),
        profileInputTmp({
            name: "Фамилия",
            placeholder: "Иванов",
        }),
        profileInputTmp({
            name: "Имя в чате",
            placeholder: "Иван",
        }),
        profileInputTmp({
            name: "Телефон",
            placeholder: "+7 (909) 967 30 30",
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

document.querySelector('body').innerHTML = profile;