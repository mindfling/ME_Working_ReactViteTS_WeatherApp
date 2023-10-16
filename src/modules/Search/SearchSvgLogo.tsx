import React, { useState } from 'react';
import style from './Search.module.scss';
import searchLogo from './search.svg';


export const Search = () => {
  // для управления нашим компонентом
  const [search, setSearch] = useState('');

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    alert('submited');
    e.preventDefault();
  }

  const handlerInput = (e: React.FormEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    }
    console.log((e.target as HTMLInputElement).value); //?
  }

  // ** with svg logo img
  return (
    <div>
      <label htmlFor="town">Погода в городе: {search}</label>
      <form className={style.search_form} onSubmit={handlerSubmit}>
        <input type="search"
          className={style.search_input}
          onInput={handlerInput}
          value={search}
          name="town"
          id="town"
          placeholder='Начните вводить город' />
        <button className={style.search_btn} type="submit">
          <img src={searchLogo} title='button with img logo' />
        </button>
      </form>
    </div>
  )
}
