import React from 'react';
import classes from './AppButton.module.scss';
import classNames from 'classnames';

export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  square?: boolean;
  size?: 'size-m' | 'size-l';
}

const AppButton: React.FC<AppButtonProps> = ({ onClick, children, className, square, size, disabled }) => {
  return (
    <button 
      className={
        classNames(
          classes.AppButton, 
          className, 
          classes[size], 
          { [classes.square]: square },
        )
      } 
      onClick={onClick}
      disabled={disabled}>
        {children}
    </button>
  );
};

export default AppButton;