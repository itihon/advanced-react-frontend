import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localstorate";

const initialState: UserSchema = {
  authData: {
    id: "",
    username: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    clearUser: (state) => {
      state.authData.id = "";
      state.authData.username = "";
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
    initUser: (state) => {
      state.authData = JSON.parse(
        localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '{ "id": "", "username": "" }'
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser, initUser } = userSlice.actions;

export default userSlice.reducer;