import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileReadOnly = (state: StateSchema) => state.profile?.readonly;

export default getProfileReadOnly;