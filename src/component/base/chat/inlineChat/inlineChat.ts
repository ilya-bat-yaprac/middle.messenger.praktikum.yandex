import * as classes from "./inlineChat.module.scss"
import tpl from './inlineChat.hbs'

export const inlineChatTmp = ({ name, photo, time, text }: any) => tpl({
    text: text,
    name: name,
    photo: photo,
    time: time,
    inlineClass: classes.inline,
    inlineContentClass: classes.content,
});
