import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getListState = (state: StateSchema) => state.articleList?.listState;

export default getListState;