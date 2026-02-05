import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import classes from './VFlexBox.module.scss';

interface VFlexBoxProps extends Pick<CSSProperties, 'alignItems'> {
  children?: React.ReactNode;
  className?: string;
  gap?: '2px' | '4px' | '8px' | '16px' | '24px' | '32px';
  stretch?: boolean;
}

const VFlexBox: React.FC<VFlexBoxProps> = ({ children, className, gap, alignItems, stretch  }) => {
  return (
    <div 
      className={classNames(classes.VFlexBox, className, { [classes.stretch]: stretch })}
      style={{ gap, alignItems }}>
        { children }
    </div>
  );
};

export default VFlexBox;