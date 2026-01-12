import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui';
import classes from './ProfileHeader.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getProfileData, getProfileOriginalData, getProfileReadOnly, setProfileData, setProfileOriginalData, setProfileReadOnly, uploadProfileData } from 'entities/Profile';
import { getAuthenticatedUser } from 'entities/User';

const ProfileHeader: React.FC = () => {
  const { t } = useTranslation('profile-page');
  const dispatch = useDispatch<AppDispatch>();
  const readOnly = useSelector(getProfileReadOnly);
  const profileData = useSelector(getProfileData);
  const authData = useSelector(getAuthenticatedUser);
  const profileOriginalData = useSelector(getProfileOriginalData);
  const hasChanged = JSON.stringify(profileData) !== JSON.stringify(profileOriginalData);

  const allowEdit = authData?.id && (authData.id === profileData?.id);

  const onEditClick = () => {
    if (profileData) {
      dispatch(setProfileOriginalData(profileData));
    }
    dispatch(setProfileReadOnly(false));
  };

  const onCancelClick = () => {
    if (profileOriginalData) {
      dispatch(setProfileData(profileOriginalData));
    }
  };

  const onSaveClick = () => {
    // @ts-expect-error damn redux
    dispatch(uploadProfileData(profileData))
  };

  return (
    <>
      <div className={classes.ProfileHeader}>
        <h2>{t('profile-page:header')}</h2>
        {
          allowEdit
            ? readOnly
                ? <AppButton size='size-l' onClick={onEditClick}>{'🖊  ' + t('edit')}</AppButton>
                : <div className={classes['button-row']}>
                  <AppButton size='size-l' onClick={onCancelClick}>{'❌  ' + t('cancel')}</AppButton>
                  <AppButton size='size-l' onClick={onSaveClick} disabled={!hasChanged}>{'💾  ' + t('save')}</AppButton>
                </div>
            : ''
        }
      </div>
    </>
  );
};

export default ProfileHeader;