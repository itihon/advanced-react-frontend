import React, { memo } from 'react';
import classes from './AppButton.module.scss';
import classNames from 'classnames';

export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  square?: boolean;
  size?: 'size-m' | 'size-l';
  pushed?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({ onClick, children, className, square, size, disabled, value, pushed }) => {
  return (
    <button 
      value={value}
      className={
        classNames(
          classes.AppButton, 
          className, 
          classes[size || 'size-m'], 
          { [classes.square]: square, [classes.pushed]: pushed },
        )
      } 
      onClick={onClick}
      disabled={disabled}>
        {children}
    </button>
  );
};

// Memoize the button since it's a presentational element that often receives
// stable props; memo helps avoid re-renders when parent updates don't change
// button props or children.
export default memo(AppButton);