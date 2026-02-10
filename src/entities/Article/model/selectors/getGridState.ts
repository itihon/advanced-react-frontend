import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getGridState = (state: StateSchema) => state.articleList?.gridState;

export default getGridState;