import React from 'react';
import classes from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/ui';
import { Profile } from 'entities/Profile/model/types/profile';

export interface ProfileCardProps {
  data?: Profile | undefined;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ data }) => {
  const { t } = useTranslation('profile-page');

  return (
    <section className={classes.ProfileCard}>
      <img className={classes.avatar} src={data?.avatar} />

      <AppInput 
        type='text' 
        label={t('firstname')} 
        value={data?.firstname || ''} 
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('lastname')} 
        value={data?.lastname || ''} 
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('age')} 
        value={String(data?.age) || ''} 
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('country')} 
        value={String(data?.country) || ''} 
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('city')} 
        value={String(data?.city) || ''} 
        onChange={() => {}}/>
    </section>
  );
};

export default ProfileCard;