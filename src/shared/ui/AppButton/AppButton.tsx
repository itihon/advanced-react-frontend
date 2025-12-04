import React from 'react';
import styles from './AppButton.module.scss';
import classNames from 'classnames';

type AppButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton: React.FC<AppButtonProps> = ({ onClick, children, className }) => {
  return (
    <button 
      className={classNames(styles.AppButton, className)} 
      onClick={onClick}>
        {children}
    </button>
  );
};

export default AppButton;