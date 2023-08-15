import changingProfileTmp from "../changingProfileData/changingProfileData.hbs";
import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";
import {backButton} from "../../component/base/buttons/backButton/backButton";
import {imageTmp} from "../../component/base/image/image";
import union from "../../../static/img/Union.png";
import {profileInputTmp} from "../../component/base/input/profileInput/profileInput";
import * as classes from "../profile/profile.module.scss";

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
    bottom: `<div class="${classes.divButton}">
                ${submitButtonTmp({
                    text: "Сохранить",
                    ref: "/profile"
                })}
            </div>`
})

document.querySelector('body').innerHTML = changingProfile;