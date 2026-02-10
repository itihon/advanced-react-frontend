import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search;

export default getArticlesPageSearch;