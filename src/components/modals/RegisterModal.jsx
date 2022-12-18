import React from 'react';
import { destroyModal } from '../../utils/modal';

const RegisterModal = () => {
  return (
    <div
      style={{
        width: 500,
        height: 500,
      }}
    >
      <h1>Register</h1>
      <br />
      <button onClick={() => destroyModal()}>Close Register</button>
    </div>
  );
};

export default RegisterModal;
