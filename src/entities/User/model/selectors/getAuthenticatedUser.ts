import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getAuthenticatedUser = (state: StateSchema) => state.user.authData;

export default getAuthenticatedUser;