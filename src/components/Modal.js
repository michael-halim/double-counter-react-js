import React from 'react';
import Backdrop from './Backdrop';
import classes from './Modal.module.css';
const Modal = (props) => {
    console.log(props.children);
  return (
    <>
      <Backdrop />
      <div className={classes.modal}>
        <h1 className={classes.message}>{props.children}</h1>
        <button onClick={() => props.onClose()} className={classes.close}>
          Close Modal
        </button>
      </div>
    </>
  );
};

export default Modal;
