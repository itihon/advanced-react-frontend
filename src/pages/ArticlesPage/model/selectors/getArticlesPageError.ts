import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export default getArticlesPageError;