import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticleCommentsError = (state: StateSchema) => state.articleComments?.error;

export default getArticleCommentsError;