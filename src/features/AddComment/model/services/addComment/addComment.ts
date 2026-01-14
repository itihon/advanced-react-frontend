import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'i18next';
import { CommentToAdd } from '../../types/addComment';

const addComment = createAsyncThunk<unknown, CommentToAdd<unknown>, { extra: ThunkExtraArg, rejectValue: string }>(
  'comments/addComment',
  async (comment: CommentToAdd<unknown>, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<unknown>(comment.apiUrl, comment.commentBody);

      return response.data;
    }
    catch {
      return thunkAPI.rejectWithValue(i18n.t('error.message'));
    }
  },
);

export default addComment;