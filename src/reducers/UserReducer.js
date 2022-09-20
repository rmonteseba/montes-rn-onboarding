import { createSlice } from '@reduxjs/toolkit';
import { login } from '@/actions/UserActions';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      return {
        ...state,
        error: initialState.error,
        loading: initialState.loading,
        user: initialState.user,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.user = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.user = payload;
    });
  },
});

const {
  reducer,
  actions: { logout },
} = userSlice;

export { logout };

export default reducer;
