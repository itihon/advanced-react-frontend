import {
  createEntityAdapter,
  createSlice,
  EntityId,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import Comment from 'entities/Comment/model/types/comment';
import ArticleDetailsCommentsSchema from '../types/ArticleDetailsCommentsSchema';
import fetchCommentsByArticleId from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment, EntityId>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (comment: Comment) => comment.id,
});

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    ids: [],
    isLoading: false,
    error: undefined,
    entities: {},
  }),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    commentAdded: commentsAdapter.addOne,
    commentsReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      commentsAdapter.setAll(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;

      commentsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state: StateSchema) => state.articleComments || commentsAdapter.getInitialState(),
);

export const { commentAdded, commentsReceived } = articleDetailsCommentsSlice.actions;

export default articleDetailsCommentsSlice.reducer;