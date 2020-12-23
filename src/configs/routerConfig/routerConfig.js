import SignInPage from '../../pages/signIn';

export const routerConfig = [
  {
    id: 1,
    Component: SignInPage,
    path: '/signIn',
    roles: [],
    isPrivate: false,
    renderWithoutVerify: false,

  },
  {
    id: 1,
    Component: () => <div>hello</div>,
    path: '/hello',
    roles: [],
    isPrivate: false,
    renderWithoutVerify: false,

  },
  {
    id: 1,
    Component: () => <div>root</div>,
    path: '/',
    roles: [],
    isPrivate: false,
    renderWithoutVerify: true,

  },
];
