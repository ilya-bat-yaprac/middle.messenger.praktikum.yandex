import changingProfileTmp from "../changingProfileData/changingProfileData.hbs";
import * as classes from "../profile/profile.module.scss";
import {submitButtonTmp} from "../../component/base/buttons/submitButton/submitButton";

const changingProfile = changingProfileTmp({
    bottom: `<div class="${classes.divButton}">
                ${submitButtonTmp({
                    text: "Сохранить",
                    ref: "/profile"
                })}
            </div>`
})

document.querySelector('body').innerHTML = changingProfile;