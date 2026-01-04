import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui';
import classes from './ProfileHeader.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getProfileReadOnly, setProfileReadOnly } from 'entities/Profile';

const ProfileHeader: React.FC = () => {
  const { t } = useTranslation('profile-page');
  const dispatch = useDispatch<AppDispatch>();
  const readOnly = useSelector(getProfileReadOnly);

  const onEditClick = () => {
    dispatch(setProfileReadOnly(false));
  };

  const onCancelClick = () => {

  };

  const onSaveClick = () => {

  };

  return (
    <>
      <div className={classes.ProfileHeader}>
        <h2>{t('profile-page:header')}</h2>
        {
          readOnly
            ? <AppButton size='size-l' onClick={onEditClick}>{'🖊  ' + t('edit')}</AppButton>
            : <div className={classes['button-row']}>
              <AppButton size='size-l' onClick={onCancelClick}>{'❌  ' + t('cancel')}</AppButton>
              <AppButton size='size-l' onClick={onSaveClick}>{'💾  ' + t('save')}</AppButton>
            </div>
        }
      </div>
    </>
  );
};

export default ProfileHeader;