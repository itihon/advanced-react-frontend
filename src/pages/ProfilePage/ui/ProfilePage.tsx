import { 
  ProfileCard, 
  profileReducer, 
  fetchProfileData, 
  getProfileIsLoading, 
  getProfileError, 
  getProfileReadOnly, 
  getProfileAvatar, 
  getProfileFirstname, 
  getProfileLastname, 
  getProfileAge, 
  getProfileCountry, 
  getProfileCity, 
  getProfileCurrency,
  setProfileFirstname, 
  setProfileLastname, 
  setProfileAge, 
  setProfileCountry, 
  setProfileCity, 
  setProfileCurrency, 
  setProfileAvatar, 
  getProfileValidationError, 
} from 'entities/Profile';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getAuthenticatedUser } from 'entities/User';
import { AppText, Loader, MessageBox } from 'shared/ui';
import { Page } from 'widgets/Page';
import { TextTheme } from 'shared/ui/AppText/AppText';
import ProfileHeader from './ProfileHeader';
import { Country, Currency } from 'shared/const/common';
import { useNavigate, useParams } from 'react-router-dom';
import { routePath } from 'shared/config/routeCounfig/routeConfig';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: React.FC = () => {
  const { t } = useTranslation(['profile-page']);
  const authData = useSelector(getAuthenticatedUser);
  const avatar = useSelector(getProfileAvatar);
  const firstname = useSelector(getProfileFirstname);
  const lastname = useSelector(getProfileLastname);
  const age = useSelector(getProfileAge);
  const country = useSelector(getProfileCountry);
  const city = useSelector(getProfileCity);
  const currency = useSelector(getProfileCurrency);
  const isLoading = useSelector(getProfileIsLoading);
  const generalError = useSelector(getProfileError);
  const validationError = useSelector(getProfileValidationError);
  const readOnly = useSelector(getProfileReadOnly);

  const { id } = useParams<{ id: string}>();

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const onAvatarChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setProfileAvatar(event.target.value));
  };

  const onFirstnameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setProfileFirstname(event.target.value));
  };

  const onLastnameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setProfileLastname(event.target.value));
  };

  const onAgeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setProfileAge(event.target.valueAsNumber));
  };

  const onCountryChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setProfileCountry(event.target.value as Country));
  };

  const onCityChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setProfileCity(event.target.value));
  };

  const onCurrencyChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setProfileCurrency(event.target.value as Currency));
  };

  const handlers = {
    onAvatarChange,
    onFirstnameChange,
    onLastnameChange,
    onAgeChange,
    onCountryChange,
    onCityChange,
    onCurrencyChange,
  };

  useEffect(() => {
    if (authData?.id) {
      if (id === '-1') {
        navigate(`${routePath.profile}${authData.id}`);
      }
      else {
        // @ts-expect-error damn redux
        dispatch(fetchProfileData(id));
      }
    }
  }, [authData, dispatch, navigate, id]);

  return (
    authData?.id
    ?  <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        {
          isLoading
            ? <Loader />
            : generalError 
              ? <AppText theme={TextTheme.ERROR}>{generalError.join('\n')}</AppText>
              : <Page>
                {
                  validationError && <MessageBox icon='⛔' title={t('incorrect-data')}>
                    {validationError.map((err, idx) => <AppText key={idx}>{err}</AppText>)}
                  </MessageBox>
                }
                <ProfileHeader />
                <ProfileCard 
                  avatar={avatar} 
                  firstname={firstname} 
                  lastname={lastname} 
                  age={age} 
                  country={country} 
                  city={city} 
                  currency={currency} 
                  {...handlers} 
                  readOnly={readOnly} />
              </Page> 
        }
      </DynamicModuleLoader>
    : <AppText>{t('not-authorized')}</AppText>
  );
};

export default memo(ProfilePage);