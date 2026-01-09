import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import Article from '../../types/article';

const fetchArticleById = createAsyncThunk<Article, string, { extra: ThunkExtraArg, rejectValue: string}>(
  'articleDetails/fetchArticleById',
  async (id: string, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Article>(`/articles/${id}`);

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('error.message'));
    }
  },
);

export default fetchArticleById;