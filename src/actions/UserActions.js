import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserController } from '@/controllers';
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
      const userController = new UserController(thunkAPI.extra.networkService);
      const { data } = await userController.login({ username, password, demoMode: true });
      return data.user;
    } catch (e) {
      thunkAPI.rejectWithValue(e?.data?.error ?? strings.login.invalidCredentials);
    }
  }
);

export { logout };
