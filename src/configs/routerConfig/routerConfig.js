import SignInPage from '../../pages/signIn';
import SignUpPage from '../../pages/signUp';
import ProfilePage from '../../pages/profile';
import OrdersPage from '../../pages/orders';
import WishList from '../../pages/wishList';
import GoodCard from '../../components/GoodCard';

export const routerConfig = [
  {
    id: 1,
    Component: SignInPage,
    path: '/sign-in',
    roles: [],
    isPrivate: false,

  },
  {
    id: 2,
    Component: SignUpPage,
    path: '/sign-up',
    roles: [],
    isPrivate: false,

  },
  {
    id: 3,
    Component: ProfilePage,
    path: '/profile',
    roles: [],
    isPrivate: false,

  },
  {
    id: 4,
    Component: OrdersPage,
    path: '/orders',
    roles: [],
    isPrivate: false,

  },
  {
    id: 5,
    Component: WishList,
    path: '/wish-list',
    roles: [],
    isPrivate: false,

  },
  {
    id: 6,
    Component: () => <div>root</div>,
    path: '/',
    roles: [],
    isPrivate: false,
    renderWithoutVerify: true,

  },
];
