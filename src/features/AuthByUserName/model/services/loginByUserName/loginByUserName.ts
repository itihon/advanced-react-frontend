import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { setUser, User } from 'entities/User';
import i18n from 'i18next';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorate';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

// First, create the thunk
const fetchUserById = createAsyncThunk<User, LoginByUserNameProps, { extra: ThunkExtraArg }>(
  'login/loginByUserName',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post('/login', { username, password });

      thunkAPI.dispatch(setUser(response.data));
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('auth.error'));
    }
  },
);

export default fetchUserById;