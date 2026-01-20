import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { Article } from 'entities/Article';
import { routePath } from 'shared/config/routeCounfig/routeConfig';

const fetchArticleList = createAsyncThunk<Article[], void, { extra: ThunkExtraArg, rejectValue: string}>(
  'ArticlesPage/fetchArticleList',
  async (_: void, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Article[]>(routePath.articles);

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('error.message'));
    }
  },
);

export default fetchArticleList;