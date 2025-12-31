import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui';
import classes from './ProfileHeader.module.scss';

const ProfileHeader: React.FC = () => {
  const { t } = useTranslation('profile-page');

  return (
    <>
      <div className={classes.ProfileHeader}>
        <h2>{t('profile-page:header')}</h2>
        <AppButton size='size-l'>{'🖊  ' + t('edit')}</AppButton>
      </div>
    </>
  );
};

export default ProfileHeader;