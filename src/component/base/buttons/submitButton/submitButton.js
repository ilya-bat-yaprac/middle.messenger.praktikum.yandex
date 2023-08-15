import * as classes from './submitButton.module.scss';
import tpl from './submitButton.hbs';

export const submitButtonTmp = ({ text }) => tpl({
  text,
  className: classes.submitButton,
});
