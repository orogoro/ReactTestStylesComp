import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logOutUser,
  fetchCurrentUser,
} from './auth-operations';

const initialUserState = {
  email: null,
};

const user = createReducer(initialUserState, {
  [logOutUser.fulfilled]: () => {
    return initialUserState;
  },
  [fetchCurrentUser.fulfilled]: (state, { payload }) => {
    state.email = payload?.email;
  },
});

const token = createReducer(null, {
  [loginUser.fulfilled]: (_, { payload }) => {
    return payload.token;
  },
  [logOutUser.fulfilled]: () => {
    return null;
  },
});

const isLoggedIn = createReducer(false, {
  [loginUser.fulfilled]: () => true,
  [logOutUser.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
});

const isRegister = createReducer(false, {
  [registerUser.fulfilled]: () => true,
});

const loader = createReducer(false, {
  [loginUser.pending]: () => true,
  [loginUser.fulfilled]: () => false,
  [loginUser.rejected]: () => false,

  [registerUser.pending]: () => true,
  [registerUser.fulfilled]: () => false,
  [registerUser.rejected]: () => false,
});

const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
  loader,
  isRegister,
});

export { authReducer };
