import React from 'react'
// import {ReactComponent as SearchIcon} from './search.svg'; //?
import searchLogo from './search.svg';
import style from './Search.module.scss';


type Props = {}

export const Search = (props: Props) => {
  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    alert('submited');
    e.preventDefault();
  }

  const handlerInput = (e: React.FormEvent<EventTarget>) => {
    console.log(e.target.value); //?
  }


  return (
    <div>
      <label htmlFor="town">Погода в городе:</label>
      <form className={style.search_form} onSubmit={handlerSubmit}>
        <input type="search" className={style.search_input} onInput={handlerInput} name="town" id="town" placeholder='Начните вводить город' />
        <button className={style.search_btn} type="submit">
          <img src={searchLogo} />
        </button>
      </form>
    </div>
  )
}
