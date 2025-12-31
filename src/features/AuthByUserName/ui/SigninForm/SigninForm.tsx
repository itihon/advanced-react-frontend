import React, { useState, memo } from 'react';
import classes from './SigninForm.module.scss';
import { AppButton, AppInput, CloseButton, Modal } from 'shared/ui';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setUserName, clearError, loginReducer, getPassword, getUsername, getIsLoading, getError } from 'features/AuthByUserName';
import loginByUserName from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getAuthenticatedUser } from 'entities/User';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader';

interface SigninFormProps {
  close?: () => void; 
}

const reducers: ReducerList = { 'loginForm': loginReducer };

const SigninForm: React.FC<SigninFormProps> = ({ close = () => {} }) => {
  const { t } = useTranslation();
  const [closing, setClosing] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const authData = useSelector(getAuthenticatedUser);

  const isClosing = closing || Boolean(authData?.id);

  const onLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(e.target.value));
    dispatch(clearError());
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
    dispatch(clearError());
  };

  const onLoginClick = (e: React.FormEvent) => {
    e.preventDefault();
    // @ts-expect-error damn redux
    dispatch(loginByUserName({ username, password }));
  };

  const closeForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setClosing(true);
  };

  const formClosed = (e: React.AnimationEvent) => {
    if (e.animationName === classes['scale-out']) {
      close();
      setClosing(false);
      dispatch(clearError());
    }
  };

  return (
    <Modal>
      <DynamicModuleLoader reducers={reducers}>
        <form
          autoComplete='off'
          className={classNames(classes.SigninForm, { [classes['closing']]: isClosing }) }
          onAnimationEnd={formClosed}
        >
          {error && <div className={classes.error}>{t(`auth.error`)}</div>}
          <CloseButton onClick={closeForm} className={classes['close-button']} square size='size-l' />
          <AppInput type='text' name='login' value={username} onChange={onLoginChange} label={t('auth.username')} />
          <AppInput type='password' name='password' value={password} onChange={onPasswordChange} label={t('auth.password')} />
          <AppButton className={classes.submit} onClick={onLoginClick} disabled={isLoading}>{t('auth.submit')}</AppButton>
        </form>
      </DynamicModuleLoader>
    </Modal>
  );
};

export default memo(SigninForm);