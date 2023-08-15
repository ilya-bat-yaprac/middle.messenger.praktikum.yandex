import * as classes from './link.module.scss';
import tpl from './link.hbs';

export const linkTmp = ({ ...props }) => tpl({
  linkClassName: classes.blueLinkClassName,
  ...props,
});
