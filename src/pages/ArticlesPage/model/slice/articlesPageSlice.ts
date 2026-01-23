import {
  createEntityAdapter,
  createSlice,
  EntityId,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Article, ArticlePreviewStyle, ArticleType } from 'entities/Article';
import ArticlesPageSchema, { ArticleSortType } from '../types/ArticlesPageSchema';
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
  },
  currentPage: 1,
  sort: ArticleSortType.CREATED_AT_ASC,
  limit: 4,
};

const getLimit = (previewStyle: ArticlePreviewStyle = ArticlePreviewStyle.TILES) => previewStyle === ArticlePreviewStyle.TILES ? 9 : 4;

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState,
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    ArticleAdded: articlesAdapter.addOne,
    ArticlesReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      articlesAdapter.addMany(state, action.payload);
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSortingType: (state, action: PayloadAction<ArticleSortType>) => {
      state.currentPage = 1;
      state.sort = action.payload;
      state.ids = initialState.ids;
      state.entities = initialState.entities;
    },
    setFilteringType: (state, action: PayloadAction<ArticleType | ''>) => {
      state.currentPage = 1;
      state.filter = action.payload;
      state.ids = initialState.ids;
      state.entities = initialState.entities;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.currentPage = 1;
      state.search = action.payload;
      state.ids = initialState.ids;
      state.entities = initialState.entities;
    },
    setPreviewStyle: (state, action: PayloadAction<ArticlePreviewStyle>) => {
      state.previewStyle = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_PREVIEW_STYLE_KEY, action.payload);
      state.limit = getLimit(action.payload);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    initArticlesPage: (state) => {
      const previewStyle = initialState.previewStyle;

      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
      state.previewStyle = previewStyle;
      state.limit = getLimit(previewStyle);
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
      articlesAdapter.addMany(state, action.payload);
      state.hasMore = !(action.payload.length < state.limit);
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

export const { 
  ArticleAdded, 
  ArticlesReceived, 
  setIsLoading, 
  setFilteringType,
  setSortingType,
  setSearchQuery,
  setPreviewStyle, 
  setCurrentPage, 
  initArticlesPage,
} = articlesPageSlice.actions;

export default articlesPageSlice.reducer;