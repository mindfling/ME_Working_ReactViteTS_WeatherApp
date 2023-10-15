import React from 'react';
import style from './Search.module.scss';
import {ReactComponent as SearchIcon} from './search.svg';

type Props = {}

export const Search = (props: Props) => {
  return (
    <div>
      <form action="">
        <input type="search" className='search' name="town" id="town" />
        <button className='search-btn' type="submit">Найти</button>
      </form>
      Search under form
    </div>
  )
}
