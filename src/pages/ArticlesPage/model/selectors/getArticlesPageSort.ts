import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort;

export default getArticlesPageSort;