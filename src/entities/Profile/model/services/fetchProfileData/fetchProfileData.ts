import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { Profile, ProfileFetchError } from '../../types/profile';
import { routePath } from 'shared/config/routeCounfig/routeConfig';

const fetchProfileData = createAsyncThunk<Profile, string, { extra: ThunkExtraArg, rejectValue: ProfileFetchError }>(
  'profile/fetchProfileData',
  async (id: string, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>(`${routePath.profile}${id}`);

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue({ 
        generalError: [i18n.t('error.message')],
      });
    }
  },
);

export default fetchProfileData;