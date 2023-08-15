import * as classes from './image.module.scss';
import tpl from './image.hbs';

export const imageTmp = ({ ...props }) => tpl({
  imageClass: classes.image,
  imageContainerClass: classes.container,
  ...props,
});
