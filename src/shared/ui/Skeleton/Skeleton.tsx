import React, { CSSProperties } from 'react';
import classes from './Skeleton.module.scss';
import classNames from 'classnames';

interface SkeletonProps extends Pick<CSSProperties, 'width' | 'height' | 'borderRadius' | 'display' | 'zIndex' | 'position'> {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return (
    <div style={props} className={classNames(classes.Skeleton, props.className)}></div>
  );
};

export default Skeleton;