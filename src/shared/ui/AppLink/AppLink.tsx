import React, { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';
import classNames from 'classnames';

export enum AppLinkTheme {
  INVERTED = 'inverted',
};

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  rounded?: boolean;
  isActive?: boolean;
  isActiveIndicator?: 'border-bottom' | 'box-shadow';
  underlineOnHover?: boolean; 
}

const AppLink: React.FC<AppLinkProps> = ({ 
  to, 
  children, 
  className, 
  theme, 
  isActive, 
  isActiveIndicator='border-bottom', 
  rounded,
  underlineOnHover,
  onClick
}) => {
  return (
    <Link 
      className={classNames(
        classes.AppLink, 
        className, 
        classes[theme || AppLinkTheme.INVERTED], 
        classes[isActiveIndicator],
        { 
          [classes.isActive]: isActive, 
          [classes.rounded]: rounded,
          [classes.underlineOnHover]: underlineOnHover,
        }
      )} 
      to={to}
      onClick={onClick}>
        {children}
    </Link>
  );
};

// Memoized because `AppLink` is a small, pure presentational component
// that receives props and can be re-used many times in lists (e.g. Sidebar).
// Memo avoids unnecessary re-renders when props are shallowly equal.
export default memo(AppLink);