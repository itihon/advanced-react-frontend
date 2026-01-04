import React from 'react';
import classes from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/ui';
import { Profile } from 'entities/Profile/model/types/profile';

export interface ProfileCardProps {
  data?: Profile | undefined;
  readOnly?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ data, readOnly = false }) => {
  const { t } = useTranslation('profile-page');

  return (
    <section className={classes.ProfileCard}>
      <img className={classes.avatar} src={data?.avatar} />

      <AppInput 
        type='text' 
        label={t('firstname')} 
        name='firstname'
        value={data?.firstname || ''} 
        readOnly={readOnly}
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('lastname')} 
        name='lastname'
        value={data?.lastname || ''} 
        readOnly={readOnly}
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('age')} 
        name='age'
        value={String(data?.age) || ''} 
        readOnly={readOnly}
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('country')} 
        name='country'
        value={String(data?.country) || ''} 
        readOnly={readOnly}
        onChange={() => {}}/>

      <AppInput 
        type='text' 
        label={t('city')} 
        name='city'
        value={String(data?.city) || ''} 
        readOnly={readOnly}
        onChange={() => {}}/>
    </section>
  );
};

export default ProfileCard;