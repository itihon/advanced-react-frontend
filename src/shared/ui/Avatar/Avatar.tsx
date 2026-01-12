import React, { memo } from 'react';
import classNames from 'classnames';
import classes from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
  readOnly?: boolean;
  size?: number;
  onChange?: React.ChangeEventHandler<HTMLImageElement>;
  className?: string;
}

const DEFAULT_SIZE = 200;

const Avatar: React.FC<AvatarProps> = ({ src, alt, onChange, readOnly, size, className }) => {
  const pxSize = `${size || DEFAULT_SIZE}px`;

  if (!src) {
    return (
      <div
        style={{
          width: pxSize,
          height: pxSize,
          lineHeight: pxSize,
          fontSize: '100%',
          textAlign: 'center',
        }}
        className={classNames(classes.Avatar, className)}>
        {'👽'}
      </div>
    );
  }

  return (
      <img 
        width={pxSize} 
        height={pxSize} 
        className={classNames(classes.Avatar, className)} 
        src={src} 
        alt={alt} />
  );
};

export default memo(Avatar);