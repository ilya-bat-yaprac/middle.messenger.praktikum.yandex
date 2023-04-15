import * as classes from "./backButton.module.scss"
import tpl from './backButton.hbs'

export const backButton = ({ text }) => tpl({
    text: text,
    className: classes.backButton,
});
