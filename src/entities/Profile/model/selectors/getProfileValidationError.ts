import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

const getProfileValidationError = (state: StateSchema) => state.profile?.validationError;

export default getProfileValidationError;