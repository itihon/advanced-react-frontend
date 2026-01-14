import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getAddCommentText = (state: StateSchema) => state.addComment?.text;

export default getAddCommentText;