import React, { memo } from 'react';
import classes from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
  readOnly?: boolean;
  size?: number;
  onChange: React.ChangeEventHandler<HTMLImageElement>;
}

const DEFAULT_SIZE = '200px';

const Avatar: React.FC<AvatarProps> = ({ src, alt, onChange, readOnly, size }) => {
  return (
    <img 
      width={size || DEFAULT_SIZE} 
      height={size || DEFAULT_SIZE} 
      className={classes.Avatar} 
      src={src} 
      alt={alt} />
  );
};

export default memo(Avatar);