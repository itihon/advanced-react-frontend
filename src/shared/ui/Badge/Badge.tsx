import React, { CSSProperties } from 'react';
import classes from './Badge.module.scss';

interface BadgeProps extends Pick<CSSProperties, 'top' | 'right' | 'bottom' | 'left'> {
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, ...cssProps }) => {
  return (
    <div className={classes.Badge} style={{ ...cssProps }}>{children}</div>
  );
};

export default Badge;