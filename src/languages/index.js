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
    links: '/ru',
    'sign-in': {
      title: 'Вход',
      email: 'e-mail',
      password: 'пароль',
      buttonTitle: 'Вход',
      linkTitle: 'Еще нет аккаунта?',
    },
    'sign-up': {
      title: 'Регистрация',
      email: 'e-mail',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      buttonTitle: 'Регистрация',
      linkTitle: 'Уже зарегистрировались',
    },
  },
  en: {
    links: '',
    'sign-in': {
      title: 'Sign in',
      email: 'email',
      password: 'password',
      buttonTitle: 'Sign in',
      linkTitle: "Don't have an account? Sign Up",
    },
    'sign-up': {
      title: 'Sign up',
      email: 'email',
      password: 'password',
      confirmPassword: 'confirm password',
      buttonTitle: 'Sign up',
      linkTitle: 'Already have an account? Sign in',
    },
  },
};
