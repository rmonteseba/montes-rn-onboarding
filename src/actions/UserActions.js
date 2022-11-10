import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApiCall } from '@/controllers/UserController';
import { strings } from '@/localization';
import { logout } from '@/reducers/UserReducer';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

export const login = createAsyncThunk(
  'UserActions/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const {
        data: { user },
      } = await loginApiCall({ username, password, demoMode: true });
      return user;
    } catch (e) {
      thunkAPI.rejectWithValue(e?.data?.error ?? strings.login.invalidCredentials);
    }
  }
);

export { logout };
