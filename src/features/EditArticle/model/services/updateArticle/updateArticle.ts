import { createAsyncThunk } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { Article, getArticleDetails } from 'entities/Article';
import { routePath } from 'shared/config/routeCounfig/routeConfig';

const updateArticle = createAsyncThunk<Article, string, { extra: ThunkExtraArg, rejectValue: string, state: StateSchema }>(
  'article/updateArticle',
  async (id: string, thunkAPI) => {
    if (!id) {
      return thunkAPI.rejectWithValue(i18n.t('error.message'));
    }

    const article = getArticleDetails(thunkAPI.getState())?.data;

    if (!article) {
      return thunkAPI.rejectWithValue(i18n.t('error.message'));
    }

    try {
      const response = await thunkAPI.extra.api.put<Article>(`${routePath.article_details}${id}`, article);

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('error.message'));
    }
  },
);

export default updateArticle;