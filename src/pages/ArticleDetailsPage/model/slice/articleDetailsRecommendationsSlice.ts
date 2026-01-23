import {
  createEntityAdapter,
  createSlice,
  EntityId,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from 'entities/Article';
import ArticleDetailsRecommendationsSchema from '../types/ArticleDetailsRecommendationsSchema';
import fetchRecommendationList from '../services/fetchRecommendationList/fetchRecommendationList';

const recommendationsAdapter = createEntityAdapter<Article, EntityId>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (article: Article) => article.id,
});

const initialState: ArticleDetailsRecommendationsSchema = {
  ids: [],
  isLoading: false,
  error: undefined,
  entities: {},
  limit: 4,
};

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationSlice',
  initialState,
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    RecommendationAdded: recommendationsAdapter.addOne,
    RecommendationsReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      recommendationsAdapter.addMany(state, action.payload);
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    initRecommendations: (state) => {
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
      state.limit = initialState.limit;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendationList.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchRecommendationList.fulfilled, (state, action) => {
      state.error = undefined;
      state.isLoading = false;
      recommendationsAdapter.addMany(state, action.payload);
    });
    builder.addCase(fetchRecommendationList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state: StateSchema) => state.articleRecommendations || recommendationsAdapter.getInitialState(),
);

export const { 
  RecommendationAdded: ArticleAdded, 
  RecommendationsReceived, 
  setIsLoading, 
  initRecommendations,
} = articleDetailsRecommendationsSlice.actions;

export default articleDetailsRecommendationsSlice.reducer;