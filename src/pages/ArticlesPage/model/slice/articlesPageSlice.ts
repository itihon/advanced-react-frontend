import {
  createEntityAdapter,
  createSlice,
  EntityId,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Article, ArticlePreviewStyle } from 'entities/Article';
import ArticlesPageSchema from '../types/ArticlesPageSchema';
import fetchArticleList from '../services/fetchArticleList/fetchArticleList';

const articlesAdapter = createEntityAdapter<Article, EntityId>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (article: Article) => article.id,
});

const LOCAL_STORAGE_ARTICLE_PREVIEW_STYLE_KEY = 'article_preview_style';

const initialState: ArticlesPageSchema = {
  ids: [],
  isLoading: false,
  error: undefined,
  entities: {},
  get previewStyle () {
    return localStorage.getItem(LOCAL_STORAGE_ARTICLE_PREVIEW_STYLE_KEY) as ArticlePreviewStyle || ArticlePreviewStyle.LIST_ITEMS;
  }
};

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState,
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    ArticleAdded: articlesAdapter.addOne,
    ArticlesReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      articlesAdapter.setAll(state, action.payload);
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPreviewStyle: (state, action: PayloadAction<ArticlePreviewStyle>) => {
      state.previewStyle = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_PREVIEW_STYLE_KEY, action.payload);
    },
    initArticlesPage: (state) => {
      state.ids = initialState.ids;
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
      state.entities = initialState.entities;
      state.previewStyle = initialState.previewStyle;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleList.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchArticleList.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;

      articlesAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticleList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state: StateSchema) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const { ArticleAdded, ArticlesReceived, setIsLoading, setPreviewStyle, initArticlesPage } = articlesPageSlice.actions;

export default articlesPageSlice.reducer;