import React from 'react';
import classes from './Navbar.module.scss';
import routeConfig from 'shared/config/routeCounfig/routeConfig';
import { AppLink, AppLinkTheme, ThemeSwitcher } from 'shared/ui';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  console.log(location.pathname)

  return (
    <div className={classes.Navbar}>
      <div className={classes.switchers}>
        <ThemeSwitcher className={classes.switcher}/>
        <LangSwitcher className={classes.switcher}/>
      </div>
      {
        Object.entries(routeConfig)
          .map(
            ([name, props], idx) => 
              <AppLink 
                isActive={location.pathname === props.path}
                theme={AppLinkTheme.INVERTED}
                key={idx} 
                to={props.path}>
                  {t(`navbar.${name}`)}
              </AppLink>
          )
      }
    </div>
  );
};

export default Navbar;