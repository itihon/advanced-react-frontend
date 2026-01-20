import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlesPageIsLoaing = (state: StateSchema) => state.articlesPage?.isLoading;

export default getArticlesPageIsLoaing;