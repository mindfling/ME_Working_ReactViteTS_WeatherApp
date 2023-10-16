import React, { useState } from 'react';
// import {ReactComponent as SearchIcon} from './search.svg'; //?
import searchLogo from './search.svg';
import style from './Search.module.scss';
import MySearchIcon from './MySearchIcon';


export const Search = () => {
  const [search, setSearch] = useState('');

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    alert('submited');
    e.preventDefault();
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
      <label htmlFor="town">Погода в городе: <b>{search}</b></label>
      <form className={style.search_form} onSubmit={handlerSubmit}>
        <input type="search"
          className={style.search_input}
          title='Ввести город в поле ввода'
          onInput={handlerInput}
          value={search}
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
