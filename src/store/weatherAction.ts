  import { createAsyncThunk } from '@reduxjs/toolkit';
  
  
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}&lang=ru&units=metric`;
  
  export const weatherRequestAsync = createAsyncThunk(
    'weather/fetch',
    async (city: string) => {
      const response: Response = await fetch(``);
      if (response.ok && response.status >= 200 && response.status < 300) {
        return response.json;
      } else {
        throw new Error(response.statusText);
      }
    }
  )