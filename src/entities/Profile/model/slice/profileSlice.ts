import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import fetchProfileData from "../services/fetchProfileData/fetchProfileData";
import uploadProfileData from "../services/uploadProfileData/uploadProfileData";
import { Country, Currency } from "shared/const/common";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.error = undefined;
      state.validationError = undefined;
      state.data = action.payload;
      state.readonly = true;
    },

    setProfileOriginalData: (state, action: PayloadAction<Profile>) => {
      state.originalData = action.payload;
    },

    setProfileReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },

    setProfileAvatar: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.avatar = action.payload;
      }
    },

    setProfileFirstname: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.firstname = action.payload;
      }
    },

    setProfileLastname: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.lastname = action.payload;
      }
    },

    setProfileAge: (state, action: PayloadAction<number>) => {
      if (state.data) {
        state.data.age = action.payload;
      }
    },

    setProfileCountry: (state, action: PayloadAction<Country>) => {
      if (state.data) {
        state.data.country = action.payload;
      }
    },

    setProfileCity: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.city = action.payload;
      }
    },

    setProfileCurrency: (state, action: PayloadAction<Currency>) => {
      if (state.data) {
        state.data.currency = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.validationError = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.error = undefined;
      state.validationError = undefined;
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.generalError;
    });

    builder.addCase(uploadProfileData.pending, (state) => {
      state.error = undefined;
      state.validationError = undefined;
      state.isLoading = true;
    });
    builder.addCase(uploadProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.readonly = true;
      state.error = undefined;
      state.validationError = undefined;
    });
    builder.addCase(uploadProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.generalError;
      state.validationError = action.payload?.validationError;
      state.readonly = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { 
  setProfileData,
  setProfileOriginalData,
  setProfileReadOnly, 
  setProfileAvatar, 
  setProfileFirstname,
  setProfileLastname,
  setProfileAge,
  setProfileCountry,
  setProfileCity,
  setProfileCurrency,
} = profileSlice.actions;

export default profileSlice.reducer;