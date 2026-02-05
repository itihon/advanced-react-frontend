import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import classes from './HFlexBox.module.scss';

interface HFlexBoxProps extends Pick<CSSProperties, 'alignItems' | 'justifyContent'> {
  children?: React.ReactNode;
  className?: string;
  gap?: '2px' | '4px' | '8px' | '16px' | '24px' | '32px';
  stretchX?: boolean;
  stretchY?: boolean;
}

const VFlexBox: React.FC<HFlexBoxProps> = ({ children, className, gap, alignItems, justifyContent, stretchX, stretchY  }) => {
  return (
    <div 
      className={classNames(classes.HFlexBox, className, { [classes.stretchX]: stretchX }, { [classes.stretchY]: stretchY })}
      style={{ gap, alignItems, justifyContent }}>
        { children }
    </div>
  );
};

export default VFlexBox;