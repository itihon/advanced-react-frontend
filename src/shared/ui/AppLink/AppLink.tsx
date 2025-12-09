import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';
import classNames from 'classnames';

export enum AppLinkTheme {
  INVERTED = 'inverted',
};

interface AppLinkProps extends LinkProps {
  to: string; 
  theme: AppLinkTheme;
  rounded?: boolean;
  isActive?: boolean;
  isActiveIndicator?: 'border-bottom' | 'box-shadow';
}

const AppLink: React.FC<AppLinkProps> = ({ 
  to, 
  children, 
  className, 
  theme, 
  isActive, 
  isActiveIndicator='border-bottom', 
  rounded,
  onClick
}) => {
  return (
    <Link 
      className={classNames(
        classes.AppLink, 
        className, 
        classes[theme], 
        classes[isActiveIndicator],
        { [classes.isActive]: isActive, [classes.rounded]: rounded }
      )} 
      to={to}
      onClick={onClick}>
        {children}
    </Link>
  );
};

export default AppLink;