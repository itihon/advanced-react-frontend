import React from 'react';
import classes from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import getProfileData from '../../model/selectors/getProfileData';
import getProfileIsLoading from '../../model/selectors/getProfileIsLoading';
import getProfileError from '../../model/selectors/getProfileError';
import { useTranslation } from 'react-i18next';
import { AppButton, AppInput } from 'shared/ui';

const ProfileCard: React.FC = () => {
  const { t } = useTranslation('profile-page');
  const profileData = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <section className={classes.ProfileCard}>
      <AppButton>{t('edit')}</AppButton>
      <img className={classes.avatar} src={profileData?.avatar} />

      <AppInput 
        type='text' 
        label={t('firstname')} 
        value={profileData?.firstname || ''} 
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('lastname')} 
        value={profileData?.lastname || ''} 
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('age')} 
        value={String(profileData?.age) || ''} 
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('age')} 
        value={String(profileData?.age) || ''} 
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('country')} 
        value={String(profileData?.country) || ''} 
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('city')} 
        value={String(profileData?.city) || ''} 
        onChange={() => {}}/>
    </section>
  );
};

export default ProfileCard;