import { createAsyncThunk } from '@reduxjs/toolkit';
import { IWeather } from './weatherSlice';


const API_KEY: string = '9f19abcdbca7dfb8a16da935612e8051';
// 9f19abcdbca7dfb8a16da935612e8051
// const myCity: string = 'Tambov';
// const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`;
// https://openweathermap.org/api/one-call-3

export const weatherRequestAsync = createAsyncThunk<IWeather, string>(
  'weather/fetch',
  async (city) => {
    console.log('city: ', city);
    const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`);
    if (response.ok && response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
)