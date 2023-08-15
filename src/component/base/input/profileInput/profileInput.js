import * as classes from './profileInput.module.scss';
import tpl from './profileInput.hbs';

export const profileInputTmp = ({ ...props }) => tpl({
  inputClassName: classes.input,
  divClassName: classes.div,
  labelClassName: classes.label,
  ...props,
});
