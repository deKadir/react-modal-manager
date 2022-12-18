import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const modalTypes = {
  login: 'login',
  register: 'register',
};

const modals = [
  {
    name: modalTypes.login,
    element: LoginModal,
  },
  {
    name: modalTypes.register,
    element: RegisterModal,
  },
];
export { modalTypes };
export default modals;
