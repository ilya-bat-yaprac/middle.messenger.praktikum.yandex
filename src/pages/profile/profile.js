import {inputTmp} from "../../component/base/input/authInput/authInput";
import profileTmp from "../profile/profile.hbs";
import * as classes from "../profile/profile.module.scss";
import {linkTmp} from "../../component/base/link/link";

const profile = profileTmp({
    form: classes.form,
    image: `<img class="${classes.image}" src="../../../static/img/Union.png" alt="Photo">`,
    emailInput: inputTmp({
        name: "Почта",
        placeholder: "pochta@yandex.ru",
    }),
    loginInput: inputTmp({
        name: "Логин",
        placeholder: "ivanivanov",
    }),
    nameInput: inputTmp({
        name: "Имя",
        placeholder: "Иван",
    }),
    surnameInput: inputTmp({
        name: "Фамилия",
        placeholder: "Иванов",
    }),
    chatNameInput: inputTmp({
        name: "Имя в чате",
        placeholder: "Иван",
    }),
    telephoneInput: inputTmp({
        name: "Телефон",
        placeholder: "+7 (909) 967 30 30",
    }),
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