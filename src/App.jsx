import './App.css';
import { createModal, useModals } from './utils/modal';
import { modalTypes } from './components/modals';
import Modal from './components/modals/Modal';

function App() {
  const modals = useModals();
  console.log(modals);
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {modals.length > 0 && <Modal />}
      <button onClick={() => createModal(modalTypes.login)}>Login modal</button>
    </div>
  );
}

export default App;
