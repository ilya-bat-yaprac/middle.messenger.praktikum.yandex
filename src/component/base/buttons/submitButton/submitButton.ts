import * as classes from "./submitButton.module.scss"
import tpl from './submitButton.hbs'

export const submitButtonTmp = ({ text }: any) => tpl({
    text: text,
    className: classes.submitButton,
});
