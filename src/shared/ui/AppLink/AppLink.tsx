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
  isActive: boolean;
}

const AppLink: React.FC<AppLinkProps> = ({ to, children, className, theme, isActive }) => {
  return (
    <Link 
      className={classNames(classes.AppLink, className, classes[theme], { [classes.isActive]: isActive })} 
      to={to}>
        {children}
    </Link>
  );
};

export default AppLink;