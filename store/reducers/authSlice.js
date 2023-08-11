import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      user: null,
      localId: null,
      profileImage: null,
    },
  },
  reducers: {
    setUser(state, action) {
      state.value = {
        ...state.value,
        user: action.payload.email,
        localId: action.payload.localId,
      };
    },
    clearUser(state, action) {
      state.value = { user: null, localId: null };
    },
    setProfileImage: (state, action) => {
      state.value = {
        ...state.value,
        profileImage: action.payload,
      };
    },
  },
});

export const { setUser, clearUser, setProfileImage } = authSlice.actions;

export default authSlice.reducer;
