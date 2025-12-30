import React, { useState } from 'react';
import classes from './Sidebar.module.scss';
import classNames from 'classnames';
import { AppButton, CloseButton } from 'shared/ui';
import { AppLink, AppLinkTheme } from 'shared/ui';
import routeConfig, { AppRoutes } from 'shared/config/routeCounfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export interface SidebarProps {
  isCollapsed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed = false }) => {
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const { t } = useTranslation();
  const location = useLocation();

  const toggleCollapse = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed})}>

      {
        collapsed
        ?  <AppButton 
            className={classes['toggle-button']}
            onClick={toggleCollapse} 
            square 
            size='size-l'>
              {'☰'}
          </AppButton>
        : <CloseButton className={classes['toggle-button']} onClick={toggleCollapse} square size='size-l' />
      }

      <div className={classes['sidebar-items']}>
        {
          Object.entries(routeConfig)
            .map(
              ([name, props], idx) => name !== AppRoutes.NOT_FOUND  
                ? <AppLink 
                    className={classes.link}
                    rounded
                    isActiveIndicator='box-shadow'
                    isActive={location.pathname === props.path}
                    theme={AppLinkTheme.INVERTED}
                    key={idx} 
                    to={props.path || ''}>
                      {
                        collapsed 
                        ? props.icon
                        : props.icon + ' ' + t(`navbar.${name}`)
                      }
                  </AppLink>
                : ''
            )
        }
      </div>
    </div>
  );
};

export default Sidebar;