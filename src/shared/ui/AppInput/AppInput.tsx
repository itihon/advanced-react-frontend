import React, { HTMLInputTypeAttribute, memo } from 'react';
import classes from './AppInput.module.scss';
import classNames from 'classnames';
import VFlexBox from '../VFlexBox/VFlexBox';

interface AppInputProps {
  type: HTMLInputTypeAttribute;
  label?: string;
  value?: string;
  name?: string;
  readOnly?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  ref?: React.RefObject<HTMLInputElement | null>;
}

const AppInput: React.FC<AppInputProps> = ({ ref, type, label, value, name, onChange, readOnly, className }) => {
  return (
    <VFlexBox className={classNames(classes.AppInput, className)}>
      <label className={classes.label} htmlFor={name}>{label}</label>
      <input ref={ref} readOnly={readOnly} type={type} className={classes.input} onChange={onChange} name={name} id={name} value={value} />
    </VFlexBox>
  );
};

export default memo(AppInput);