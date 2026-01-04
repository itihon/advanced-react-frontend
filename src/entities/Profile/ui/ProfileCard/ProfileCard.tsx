import React from 'react';
import classes from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/ui';
import { Profile } from 'entities/Profile/model/types/profile';

export interface ProfileCardProps extends Partial<Profile> {
  readOnly?: boolean;
  onAvatarChange?: React.ChangeEventHandler;
  onFirstnameChange?: React.ChangeEventHandler;
  onLastnameChange?: React.ChangeEventHandler;
  onAgeChange?: React.ChangeEventHandler;
  onCountryChange?: React.ChangeEventHandler;
  onCityChange?: React.ChangeEventHandler;
  onCurrencyChange?: React.ChangeEventHandler;
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {

  const {
    avatar,
    firstname,
    lastname,
    age,
    country,
    city,
    currency,
    readOnly,
    onAvatarChange = () => {},
    onFirstnameChange = () => {},
    onLastnameChange = () => {},
    onAgeChange = () => {},
    onCountryChange = () => {},
    onCityChange = () => {},
    onCurrencyChange = () => {},
  } = props;

  const { t } = useTranslation('profile-page');

  return (
    <section className={classes.ProfileCard}>
      <img className={classes.avatar} src={avatar} />

      <AppInput 
        type='text' 
        label={t('firstname')} 
        name='firstname'
        value={firstname || ''} 
        readOnly={readOnly}
        onChange={onFirstnameChange}/>

      <AppInput 
        type='text' 
        label={t('lastname')} 
        name='lastname'
        value={lastname || ''} 
        readOnly={readOnly}
        onChange={onLastnameChange}/>

      <AppInput 
        type='number' 
        label={t('age')} 
        name='age'
        value={String(age) || ''} 
        readOnly={readOnly}
        onChange={onAgeChange}/>

      <AppInput 
        type='text' 
        label={t('country')} 
        name='country'
        value={country || ''} 
        readOnly={readOnly}
        onChange={onCountryChange}/>

      <AppInput 
        type='text' 
        label={t('city')} 
        name='city'
        value={city || ''} 
        readOnly={readOnly}
        onChange={onCityChange}/>
    </section>
  );
};

export default ProfileCard;