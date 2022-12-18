import React from 'react';
import { modalTypes } from '.';
import { createModal } from '../../utils/modal';

const LoginModal = () => {
  return (
    <div
      style={{
        width: 500,
        height: 500,
      }}
    >
      <h1>Login</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nesciunt. Lorem ipsum dolor sit amet.</p>
      <button disabled>login</button>
      <br />
      <br />
      <button onClick={() => createModal(modalTypes.register)}>register</button>
    </div>
  );
};

export default LoginModal;
