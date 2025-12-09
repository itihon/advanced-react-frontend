import React, { ReactNode } from 'react';
import classes from './Modal.module.scss';

interface Props {
  children?: ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.Modal}>
        { children }
      </div>
    </div>
  );
};

export default Modal;