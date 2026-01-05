import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { Profile } from '../../types/profile';

const uploadProfileData = createAsyncThunk<Profile, Profile, { extra: ThunkExtraArg }>(
  'profile/uploadProfileData',
  async (profileData: Profile, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.put<Profile>('/profile', profileData);

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('auth.error'));
    }
  },
);

export default uploadProfileData;