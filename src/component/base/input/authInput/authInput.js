import * as classes from './authInput.module.scss';
import tpl from './authInput.hbs';

export const authInputTmp = ({ ...props }) => tpl({
  inputClassName: classes.input,
  divClassName: classes.div,
  ...props,
});
