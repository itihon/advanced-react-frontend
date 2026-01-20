import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit;

export default getArticlesPageLimit;