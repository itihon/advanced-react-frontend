import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getArticlesPagePreviewStyle = (state: StateSchema) => state.articlesPage?.previewStyle;

export default getArticlesPagePreviewStyle;