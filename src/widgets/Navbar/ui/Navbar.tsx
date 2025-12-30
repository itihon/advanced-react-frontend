import React, { Suspense, useState } from 'react';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme, Loader, ThemeSwitcher } from 'shared/ui';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { SigninForm } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, getAuthenticatedUser } from 'entities/User';

const Navbar: React.FC = () => {
  const [signinFormVisible, setSigninFormVisible] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getAuthenticatedUser);
  const dispatch = useDispatch();

  const openSigninForm = () => {
    setSigninFormVisible(true);
  };

  const logOut = () => {
    dispatch(clearUser());
  }

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
        onClick={authData?.id ? logOut : openSigninForm}>
          {authData?.id ? t('navbar.logout') : t('navbar.enter')}
      </AppLink>

      <Suspense fallback={<Loader />}>
        {
          signinFormVisible 
            ? <SigninForm close={closeSigninForm}/>
            : ''
        }
      </Suspense>
    </div>
  );
};

export default Navbar;