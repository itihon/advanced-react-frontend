import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileLastname = (state: StateSchema) => state.profile?.data?.lastname;

export default getProfileLastname;