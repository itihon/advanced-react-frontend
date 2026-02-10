import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileFirstname = (state: StateSchema) => state.profile?.data?.firstname;

export default getProfileFirstname;