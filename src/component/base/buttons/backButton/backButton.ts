import * as classes from "./backButton.module.scss"
import tpl from './backButton.hbs'
import {imageTmp} from "../../image/image";
import backArrow from "../../../../../static/img/backArrow.svg"

export const backButton = () => tpl({
    image: imageTmp({
        imageSrc: backArrow,
        imageAlt: "Назад",
    }),
    containerClass: classes.container,
    backButtonClass: classes.backButton,
});
