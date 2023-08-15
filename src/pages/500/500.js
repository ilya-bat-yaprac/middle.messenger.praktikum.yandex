import error500Tmp from '../../component/base/error/error.hbs';
import * as classes from '../../component/base/error/error.module.scss';

const error500 = error500Tmp({
  errorStyles: classes.errorStyles,
  number: '500',
  text: 'Мы уже фиксим',
  linkText: 'Назад к чатам',
});

document.querySelector('body').innerHTML = error500;
