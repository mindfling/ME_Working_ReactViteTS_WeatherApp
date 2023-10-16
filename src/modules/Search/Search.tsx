import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {ReactComponent as SearchIcon} from './search.svg'; //?
import style from './Search.module.scss';
import MySearchIcon from './MySearchIcon';
import { weatherRequestAsync } from '../../store/weatherAction';
import { useAppDispatch } from '../../hooks';


export const Search = () => {
  const dispatch = useAppDispatch(); //?? объясни зачем здесь нужен этот диспатч
  const [searchText, setSearch] = useState('');

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    // alert('submited search: ' + searchText);
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    }
    dispatch(weatherRequestAsync(searchText));
    
    // todo hook который типизирует dispatch
    // вместо useDispatch используем наш useAppDispatch
  }

  // для управления нашим компонентом
  const handlerInput = (e: React.FormEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    }
    console.log((e.target as HTMLInputElement).value); //?
  }


  return (
    <div>
      <label htmlFor="town">Погода в городе: <b>{searchText}</b></label>
      <form className={style.search_form} onSubmit={handlerSubmit}>
        <input type="search"
          className={style.search_input}
          title='Ввести город в поле ввода'
          onInput={handlerInput}
          value={searchText}
          name="town"
          id="town"
          placeholder='Начните вводить город' />
        <button className={style.search_btn} type="submit">
          <MySearchIcon />
        </button>
      </form>
    </div>
  )
}
