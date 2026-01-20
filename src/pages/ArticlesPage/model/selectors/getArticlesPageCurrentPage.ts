import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlesPageCurrentPage = (state: StateSchema) => state.articlesPage?.currentPage;

export default getArticlesPageCurrentPage;