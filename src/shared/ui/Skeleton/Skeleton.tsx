import React, { CSSProperties } from 'react';
import classes from './Skeleton.module.scss';
import classNames from 'classnames';

interface SkeletonProps extends Pick<CSSProperties, 'width' | 'height' | 'borderRadius' | 'display' | 'zIndex' | 'position'> {
  className?: string;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { style, className, ...rest } = props;

  return (
    <div style={{ ...style, ...rest }} className={classNames(classes.Skeleton, className)}></div>
  );
};

export default Skeleton;