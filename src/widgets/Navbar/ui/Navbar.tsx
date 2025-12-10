import React, { useState } from 'react';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme, ThemeSwitcher } from 'shared/ui';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { SigninForm } from 'features/AuthByUserName';

const Navbar: React.FC = () => {
  const [signinFormVisible, setSigninFormVisible] = useState(false);
  const { t } = useTranslation();

  const openSigninForm = () => {
    setSigninFormVisible(true);
  };

  const closeSigninForm = () => {
    setSigninFormVisible(false);
  };

  return (
    <div className={classes.Navbar}>

      <div className={classes.switchers}>
        <ThemeSwitcher className={classes.switcher}/>
        <LangSwitcher className={classes.switcher}/>
      </div>

      <AppLink 
        isActive={false}
        theme={AppLinkTheme.INVERTED}
        to={'#'}
        onClick={openSigninForm}>
          {t('navbar.enter')}
      </AppLink>

      {
        signinFormVisible 
          ? <SigninForm close={closeSigninForm}/>
          : ''
      }
    </div>
  );
};

export default Navbar;