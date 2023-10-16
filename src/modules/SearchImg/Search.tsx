import React, { useState } from 'react';
// import {ReactComponent as SearchIcon} from './search.svg'; //?
import searchLogo from './search.svg';
import style from './Search.module.scss';


type Props = {}

export const Search = (props: Props) => {
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
          <img src={searchLogo} title='button with img logo'/>
        </button>
      </form>
    </div>
  )
}
