import React from 'react';
import classes from './SigninForm.module.scss';
import { AppButton, CloseButton, Modal } from 'shared/ui';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface SigninFormProps {
  close?: () => void; 
}

const SigninForm: React.FC<SigninFormProps> = ({ close = () => {} }) => {
  const { t } = useTranslation();
  const [closing, setClosing] = React.useState(false);

  const closeForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setClosing(true);
  };

  const formClosed = (e: React.AnimationEvent) => {
    if (e.animationName === classes['scale-out']) {
      close();
      setClosing(false);
    }
  };

  return (
    <Modal>
      <form
        autoComplete='off'
        className={classNames(classes.SigninForm, { [classes['closing']]: closing }) }
        onAnimationEnd={formClosed}
      >
        <CloseButton onClick={closeForm} className={classes['close-button']} square size='size-l' />
        <label className={classes.label} htmlFor='login'>{t('auth.username')}</label>
        <input className={classes.input} type="text" id='login' name='login' />
        <label className={classes.label} htmlFor='password'>{t('auth.password')}</label>
        <input className={classes.input} type="password" id='password' name='password' />
        <AppButton className={classes.submit}>{t('auth.submit')}</AppButton>
      </form>
    </Modal>
  );
};

export default SigninForm;