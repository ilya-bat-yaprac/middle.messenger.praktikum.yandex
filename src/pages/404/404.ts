import error404Tmp from "../../component/base/error/error.hbs";
import * as classes from "../../component/base/error/error.module.scss";

const error404 = error404Tmp ({
    errorStyles: classes.errorStyles,
    number: "404",
    text: "Не туда попали",
    linkText: "Назад к чатам"
})


const bodyElement = document?.querySelector('body');
if (bodyElement) {
    bodyElement.innerHTML = error404;
}
