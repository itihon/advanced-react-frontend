import type { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileAge = (state: StateSchema) => state.profile?.data?.age;

export default getProfileAge;