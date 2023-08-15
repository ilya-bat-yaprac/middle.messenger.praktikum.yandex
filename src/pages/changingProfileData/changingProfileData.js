import changingProfileTmp from './changingProfileData.hbs';
import * as classes from './changingProfileData.module.scss';
import { submitButtonTmp } from '../../component/base/buttons/submitButton/submitButton';
import { backButton } from '../../component/base/buttons/backButton/backButton';
import { imageTmp } from '../../component/base/image/image';
import union from '../../../static/img/Union.png';
import { profileInputTmp } from '../../component/base/input/profileInput/profileInput';

const changingProfile = changingProfileTmp({
  backButton,
  containerClass: classes.container,
  formClass: classes.form,
  image: imageTmp({
    imageSrc: union,
    imageAlt: 'Photo',
    imageContainerClass: classes.imageContainer,
    imageClass: classes.image,
  }),
  inputs: [
    profileInputTmp({
      name: 'email',
      placeholder: 'pochta@yandex.ru',
    }),
    profileInputTmp({
      name: 'login',
      placeholder: 'ivanivanov',
    }),
    profileInputTmp({
      name: 'first_name',
      placeholder: 'Иван',
    }),
    profileInputTmp({
      name: 'second_name',
      placeholder: 'Иванов',
    }),
    profileInputTmp({
      name: 'nickname',
      placeholder: 'Иван',
    }),
    profileInputTmp({
      name: 'phone',
      placeholder: '+7 (909) 967 30 30',
    })],
  bottom: `<div class="${classes.divButton}">
                ${submitButtonTmp({
    text: 'Сохранить',
    ref: '/profile',
  })}
            </div>`,
});

document.querySelector('body').innerHTML = changingProfile;
