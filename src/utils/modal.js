import { useSelector } from 'react-redux';
import store from '../store';
import { append, destroy, destroyAll } from '../store/modal';

const useModals = () => useSelector((state) => state.modal.modals);

const createModal = (name, data = false) =>
  store.dispatch(
    append({
      name,
      data,
    })
  );
const destroyModal = () => store.dispatch(destroy());
const destroyAllModals = () => store.dispatch(destroyAll());
export { createModal, destroyModal, destroyAllModals, useModals };
