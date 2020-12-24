import SignInPage from '../../pages/signIn';
import SignUpPage from '../../pages/signUp';

export const routerConfig = [
  {
    id: 1,
    Component: SignInPage,
    path: '/sign-in',
    roles: [],
    isPrivate: false,
    renderWithoutVerify: false,

  },
  {
    id: 2,
    Component: SignUpPage,
    path: '/sign-up',
    roles: [],
    isPrivate: false,
    renderWithoutVerify: false,

  },
  {
    id: 3,
    Component: () => <div>root</div>,
    path: '/',
    roles: [],
    isPrivate: false,
    renderWithoutVerify: true,

  },
];
