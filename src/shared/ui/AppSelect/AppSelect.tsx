import React, { memo } from 'react';
import classes from './AppSelect.module.scss';

interface AppSelectProps {
  label?: string;
  name?: string;
  readOnly?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options?: Record<string, string | number>;
  selectedOption?: string;
}

const AppSelect: React.FC<AppSelectProps> = ({ label, name, onChange, readOnly, options = {}, selectedOption }) => {
  return (
    <div className={classes.AppSelect}>
      <label className={classes.label} htmlFor={name}>{label}</label>
      <select disabled={readOnly} className={classes.select} onChange={onChange} name={name} id={name} value={selectedOption}>
        {
          Object.entries(options).map(([key, value], idx) => <option key={idx} value={key}>{value}</option>)
        }
      </select>
    </div>
  );
};

export default memo(AppSelect);