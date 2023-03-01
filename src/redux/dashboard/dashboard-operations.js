import { createAsyncThunk } from '@reduxjs/toolkit';
import { dashboardAPI } from '../../axiosAPI';

const fetchDashboard = createAsyncThunk(
  'dashboar/fetchDashboard',
  async (_, { rejectWithValue }) => {
    try {
      const response = await dashboardAPI.dashboard();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { fetchDashboard };
