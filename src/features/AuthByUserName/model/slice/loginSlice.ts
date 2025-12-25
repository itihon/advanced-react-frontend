import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import LoginSchema from '../types/LoginSchema'
import fetchUserById from '../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
  isLoading: false,
  password: '',
  username: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.username = action.payload.username;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
})

// Action creators are generated for each case reducer function
export const { setUserName, setPassword, clearError } = loginSlice.actions

export default loginSlice.reducer