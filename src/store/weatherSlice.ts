import { createSlice } from '@reduxjs/toolkit';
import { weatherRequestAsync } from './weatherAction';

export interface IWeather {
  isLoading: boolean;
  error: string;
  weather: any; // data
};


const initialState: IWeather = {
  isLoading: false,
  error: '',
  weather: {},
};

export const weatherSlice = createSlice({
  name: 'wether',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(weatherRequestAsync.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.weather = {};
      })
      .addCase(weatherRequestAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error ?? ''; // check error
        state.weather = action.payload; // good data
      })
      .addCase(weatherRequestAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Неизвестная ошибка загрузки';
        state.weather = {};
      })
  }
});

export default weatherSlice.reducer;