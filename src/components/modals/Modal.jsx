import modalData from '.';
import { destroyModal, useModals } from '../../utils/modal';

const Modal = () => {
  const modals = useModals();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        inset: 0,
      }}
    >
      {/* Modal background */}
      <div
        style={{
          position: 'fixed',
          zIndex: -1,
          backgroundColor: 'black',
          opacity: 0.5,
          inset: 0,
        }}
        onClick={() => destroyModal()}
      ></div>
      {modals.map((mdl) => {
        const modal = modalData.find((m) => m.name === mdl.name);
        return (
          <div
            style={{
              position: 'fixed',
              backgroundColor: 'white',
              padding: '2rem',
            }}
          >
            <modal.element />
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
