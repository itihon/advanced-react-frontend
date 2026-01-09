import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticleDetails = (state: StateSchema) => state.articleDetails;

export default getArticleDetails;