import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { Profile, ProfileUploadError } from '../../types/profile';
import validateProfileData from '../validateProfileData/validateProfileData';
import { routePath } from 'shared/config/routeCounfig/routeConfig';

const lowdashRegEx = /_/g;

const uploadProfileData = createAsyncThunk<Profile, Profile, { extra: ThunkExtraArg, rejectValue: ProfileUploadError }>(
  'profile/uploadProfileData',
  async (profileData: Profile, thunkAPI) => {
    const errors = validateProfileData(profileData);

    if (errors.length) {
      return thunkAPI.rejectWithValue({
        validationError: errors
          .map(err => err.toLowerCase().replace(lowdashRegEx, '-'))
          .map(err => i18n.t(`profile-page:${err}`)),
      });
    }

    try {
      const response = await thunkAPI.extra.api.put<Profile>(`${routePath.profile}${profileData.id}`, profileData);

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue({
        generalError: [i18n.t('error.message')],
      });
    }
  },
);

export default uploadProfileData;