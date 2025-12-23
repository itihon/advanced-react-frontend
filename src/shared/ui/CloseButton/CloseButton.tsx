import React, { memo } from 'react';
import AppButton, { AppButtonProps } from '../AppButton/AppButton';
import classes from './CloseButton.module.scss';
import classNames from 'classnames';

export type CloseButtonProps = AppButtonProps;

const CloseButton: React.FC<CloseButtonProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <AppButton 
      className={classNames(classes.CloseButton, className)} 
      {...restProps}>
        🗙
    </AppButton>
  );
};

// Memoized wrapper around `AppButton` — purely presentational and passes
// props through. Memo prevents re-renders when props are unchanged.
export default memo(CloseButton);