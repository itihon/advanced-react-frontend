import React, { HTMLInputTypeAttribute, memo } from 'react';
import classes from './AppInput.module.scss';

interface AppInputProps {
  type: HTMLInputTypeAttribute;
  label?: string;
  value?: string;
  name?: string;
  readOnly?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const AppInput: React.FC<AppInputProps> = ({ type, label, value, name, onChange, readOnly }) => {
  return (
    <div className={classes.AppInput}>
      <label className={classes.label} htmlFor={name}>{label}</label>
      <input readOnly={readOnly} type={type} className={classes.input} onChange={onChange} name={name} id={name} value={value} />
    </div>
  );
};

export default memo(AppInput);