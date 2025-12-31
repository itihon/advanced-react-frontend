import { fetchProfileData, getProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getAuthenticatedUser } from 'entities/User';
import { SigninForm } from 'features/AuthByUserName';
import { Loader } from 'shared/ui';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: React.FC = () => {
  const { t } = useTranslation('profile-page');
  const authData = useSelector(getAuthenticatedUser);
  const profileData = useSelector(getProfileData);
  const [authCancelled, setAuthCancelled] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const onAuthCancelled = () => {
    setAuthCancelled(true);
  };

  useEffect(() => {
    if (authData?.id && !profileData) {
      // @ts-expect-error damn redux
      dispatch(fetchProfileData());
    }
  }, [authData, dispatch, profileData]);

  return (
    authData?.id && !authCancelled
    ?  <DynamicModuleLoader reducers={reducers}>
        <h2>{t('header')}</h2>
        <ProfileCard />
      </DynamicModuleLoader>
    : <Suspense fallback={<Loader />}>
        {
          !authCancelled 
            ? <SigninForm close={onAuthCancelled} />
            : ''
        }
      </Suspense>
  );
};

export default ProfilePage;