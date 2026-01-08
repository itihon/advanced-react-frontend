import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileOriginalData = (state: StateSchema) => state.profile?.originalData;

export default getProfileOriginalData;