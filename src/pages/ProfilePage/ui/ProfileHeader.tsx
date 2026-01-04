import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui';
import classes from './ProfileHeader.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { setProfileReadOnly } from 'entities/Profile';

const ProfileHeader: React.FC = () => {
  const { t } = useTranslation('profile-page');
  const dispatch = useDispatch<AppDispatch>();

  const onEditClick = () => {
    dispatch(setProfileReadOnly(false));
  };

  return (
    <>
      <div className={classes.ProfileHeader}>
        <h2>{t('profile-page:header')}</h2>
        <AppButton size='size-l' onClick={onEditClick}>{'🖊  ' + t('edit')}</AppButton>
      </div>
    </>
  );
};

export default ProfileHeader;