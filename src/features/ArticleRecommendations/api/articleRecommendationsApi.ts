import { rtkApi } from 'shared/api/rtkApi';
import { routePath } from 'shared/config/routeCounfig/routeConfig';

const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
      query: (limit: number) => ({
        url: routePath.articles,
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

const { useGetArticleRecommendationsQuery } = articleRecommendationsApi;

export default useGetArticleRecommendationsQuery;