import React, { useState } from 'react';
import AppButton from '../AppButton/AppButton';
import classes from './MessabeBox.module.scss';

interface MessageBoxProps {
  title: string;
  message: string;
  icon?: string | React.ReactNode; 
  onClose?: () => void;
}

const MessageBox: React.FC<MessageBoxProps> = ({ title, message, icon, onClose = () => {} }) => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
    onClose();
  };

  return (
    visible 
    ?  <div className={classes.overlay}>
        <div className={classes.MessageBox}>
          <h3 className={classes.title}>{title}</h3>
          <div className={classes.content}>
            <div className={classes.icon}>{icon}</div>
            <span className={classes.message}>{message}</span>
          </div>
          <AppButton className={classes.button} onClick={handleClick}>Close</AppButton>
        </div>
      </div>
    : ''
  );
};

export default MessageBox;
