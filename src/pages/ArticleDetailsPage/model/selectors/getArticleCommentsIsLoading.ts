import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticleCommentsIsLoading = (state: StateSchema) => state.articleComments?.isLoading;

export default getArticleCommentsIsLoading;