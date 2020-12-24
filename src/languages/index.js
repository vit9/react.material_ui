export const languagesList = [
  {
    id: 1,
    name: 'Русский',
    routeName: '/ru',
  },
  {
    id: 2,
    name: 'English',
    routeName: '',
  },
];
export const supportedLanguages = [
  'ru',
];
export const languages = {
  ru: {
    'sign-in': {
      title: 'Вход',
      email: 'e-mail',
      password: 'пароль',
    },
    'sign-up': {
      title: 'Регистрация',
      email: 'e-mail',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
    },
  },
  en: {
    'sign-in': {
      title: 'Sign in',
      email: 'email',
      password: 'password',
    },
    'sign-up': {
      title: 'Sign up',
      email: 'email',
      password: 'password',
      confirmPassword: 'confirm password',
    },
  },
};
