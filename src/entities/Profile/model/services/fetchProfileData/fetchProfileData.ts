import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { Profile } from '../../types/profile';

const fetchProfileData = createAsyncThunk<Profile, void, { extra: ThunkExtraArg }>(
  'profile/fetchProfileData',
  async (_: void, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>('/profile');

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('auth.error'));
    }
  },
);

export default fetchProfileData;