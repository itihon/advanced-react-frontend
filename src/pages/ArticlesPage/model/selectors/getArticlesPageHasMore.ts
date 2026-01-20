import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

export default getArticlesPageHasMore;