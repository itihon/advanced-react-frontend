import { createAsyncThunk } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { Article } from 'entities/Article';
import { routePath } from 'shared/config/routeCounfig/routeConfig';
import getArticlesPageLimit from '../../selectors/getArticlesPageLimit';

const fetchArticleList = createAsyncThunk<Article[], void, { extra: ThunkExtraArg, rejectValue: string, state: StateSchema}>(
  'ArticlesPage/fetchArticleList',
  async (_: void, thunkAPI) => {
    const limit = getArticlesPageLimit(thunkAPI.getState());

    try {
      const response = await thunkAPI.extra.api.get<Article[]>(`${routePath.articles}?_limit=${limit}`);

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('error.message'));
    }
  },
);

export default fetchArticleList;