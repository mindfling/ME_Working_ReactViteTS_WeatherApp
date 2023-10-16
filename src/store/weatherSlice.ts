import { createSlice } from '@reduxjs/toolkit';

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
  
});

export default weatherSlice.reducer;