import { createAsyncThunk } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { Article } from 'entities/Article';
import { routePath } from 'shared/config/routeCounfig/routeConfig';
import getArticlesPageLimit from '../../selectors/getArticlesPageLimit';
import getArticlesPageCurrentPage from '../../selectors/getArticlesPageCurrentPage';
import getArticlesPageFilter from '../../selectors/getArticlesPageFilter';
import getArticlesPageSort from '../../selectors/getArticlesPageSort';
import getArticlesPageSearch from '../../selectors/getArticlesPageSearch';

const fetchArticleList = createAsyncThunk<Article[], void, { extra: ThunkExtraArg, rejectValue: string, state: StateSchema}>(
  'ArticlesPage/fetchArticleList',
  async (_: void, thunkAPI) => {
    const limit = getArticlesPageLimit(thunkAPI.getState()) || 9;
    const page = getArticlesPageCurrentPage(thunkAPI.getState()) || 1;
    const filter = getArticlesPageFilter(thunkAPI.getState()) || '';
    const sort = getArticlesPageSort(thunkAPI.getState()) || '';
    const search = getArticlesPageSearch(thunkAPI.getState()) || '';

    const sortOrder = sort.endsWith('Asc') ? 'Asc' : sort.endsWith('Desc') ? 'Desc' : '';
    const sortField = sort.split(sortOrder)[0]

    try {
      const response = await thunkAPI.extra.api.get<Article[]>(`${routePath.articles}?_limit=${limit}&_page=${page}&type_like=${filter}&_sort=${sortField}&_order=${sortOrder.toLocaleLowerCase()}&q=${search}`);

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('error.message'));
    }
  },
);

export default fetchArticleList;