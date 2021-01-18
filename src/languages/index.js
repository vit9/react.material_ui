export const languagesList = [
  {
    id: 1,
    name: 'Русский',
    language: '/ru',
  },
  {
    id: 2,
    name: 'English',
    language: '',
  },
];
export const supportedLanguages = [
  'ru',
];
export const languages = {
  ru: {
    link: '/ru',
    'app-bar': {
      account: 'Мой аккаунт',
      myGoods: 'Мои заказы',
      wishList: 'Список желаний',
    },
    'sign-in': {
      title: 'Вход',
      email: 'e-mail',
      password: 'пароль',
      buttonTitle: 'Вход',
      linkTitle: 'Еще нет аккаунта? Зарегестрировались',
    },
    'sign-up': {
      title: 'Регистрация',
      email: 'e-mail',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      buttonTitle: 'Регистрация',
      linkTitle: 'Уже зарегистрировались? Войдите',
    },
    profile: {
      surname: 'Фамилия',
      name: 'Имя',
      patronymic: 'Отчество',
      birth: 'Дата рождения',
      sex: 'Пол',
      email: 'Имейл',
      phone: 'Моб. телефон',
    },
  },
  en: {
    link: '',
    'app-bar': {
      account: 'My account',
      myGoods: 'My orders',
      wishList: 'Wish list',
    },
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
    profile: {
      surname: 'Surname',
      name: 'Name',
      patronymic: 'Patronymic',
      birth: 'Birthday',
      sex: 'Sex',
      email: 'E-mail',
      phone: 'Mobile Phone',
    },
  },
};
