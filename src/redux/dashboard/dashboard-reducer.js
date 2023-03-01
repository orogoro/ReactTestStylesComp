import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchDashboard } from './dashboard-operations';

const initialUserState = {
  data: null,
  loader: false,
};

const dashboard = createReducer(initialUserState, {
  [fetchDashboard.fulfilled]: (state, { payload }) => {
    state.data = payload;
    state.loader = false;
  },
  [fetchDashboard.pending]: (state) => {
    state.loader = true;
  },
  [fetchDashboard.rejected]: (state) => {
    state.loader = false;
  },
});

const dashboardReducer = combineReducers({
  dashboard,
});

export { dashboardReducer };
