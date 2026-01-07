import React, { useState } from 'react';
import AppButton from '../AppButton/AppButton';
import Modal from '../Modal/Modal';
import classes from './MessabeBox.module.scss';

interface MessageBoxProps {
  title: string;
  children?: React.ReactNode;
  icon?: React.ReactNode; 
  onClose?: () => void;
}

const MessageBox: React.FC<MessageBoxProps> = ({ title, children, icon, onClose = () => {} }) => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
    onClose();
  };

  return (
    visible 
    ?  <Modal>
          <div className={classes.MessageBox}>
            <h3 className={classes.title}>{title}</h3>
            <div className={classes.content}>
              {icon && <div className={classes.icon}>{icon}</div>}
              <span className={classes.message}>{children}</span>
            </div>
            <AppButton className={classes.button} onClick={handleClick}>Close</AppButton>
          </div>
      </Modal>
    : ''
  );
};

export default MessageBox;
