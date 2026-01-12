import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { Comment } from 'entities/Comment';

const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, { extra: ThunkExtraArg, rejectValue: string}>(
  'ArticleDetailsPage/fetchCommentsByArticleId',
  async (articleId: string, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Comment[]>(`/comments`, {
        params: {
          articleId,
          _expand: 'user',
        }
      });

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('error.message'));
    }
  },
);

export default fetchCommentsByArticleId;