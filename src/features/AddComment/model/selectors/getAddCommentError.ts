import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getAddCommentError = (state: StateSchema) => state.addComment?.error;

export default getAddCommentError;