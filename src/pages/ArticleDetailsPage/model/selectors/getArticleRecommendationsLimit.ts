import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlRecommendationsLimit = (state: StateSchema) => state.articleRecommendations?.limit;

export default getArticlRecommendationsLimit;