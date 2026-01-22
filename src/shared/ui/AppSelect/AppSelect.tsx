import React, { memo } from 'react';
import classNames from 'classnames';
import classes from './AppSelect.module.scss';

interface AppSelectProps {
  label?: string;
  name?: string;
  readOnly?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options?: Record<string, string | number>;
  selectedOption?: string;
  align?: 'column' | 'row';
}

const AppSelect: React.FC<AppSelectProps> = ({ label, name, onChange, readOnly, options = {}, selectedOption, align = 'column' }) => {
  return (
    <div className={classNames(classes.AppSelect, classes[align])}>
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