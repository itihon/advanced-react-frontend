import React, { useState } from 'react';
import classes from './Sidebar.module.scss';
import classNames from 'classnames';

interface Props {
  
}

const Sidebar: React.FC<Props> = ({  }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed})}>
      <button onClick={toggleCollapse}>{collapsed ? '➡' : '⬅'}</button>
    </div>
  );
};

export default Sidebar;