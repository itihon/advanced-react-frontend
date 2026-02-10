import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlesPageFilter = (state: StateSchema) => state.articlesPage?.filter;

export default getArticlesPageFilter;