import * as classes from './inlineChat.module.scss';
import tpl from './inlineChat.hbs';

export const inlineChatTmp = ({
  name, photo, time, text,
}) => tpl({
  text,
  name,
  photo,
  time,
  inlineClass: classes.inline,
  inlineContentClass: classes.content,
});
