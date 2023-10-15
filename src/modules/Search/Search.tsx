import React from 'react';
import style from './Search.module.scss';
import {ReactComponent as SearchIcon} from './search.svg';

type Props = {}

export const Search = (props: Props) => {
  return (
    <div>
        <label htmlFor="town">Погода в городе:</label>
      <form className={style.search_form}>
        <input type="search" className={style.search_input} name="town" id="town" placeholder='Начните вводить город' />
        <button className={style.search_btn} type="submit">Найти</button>
      </form>
      Search under form
    </div>
  )
}
