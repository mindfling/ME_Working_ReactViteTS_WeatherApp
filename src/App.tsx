// import React from 'react'
import style from './App.module.scss'
import { Container } from './modules/Container/Container'; 
import logo from './assets/vite.svg';

import { Search as SearchLogo } from './modules/Search/SearchSvgLogo';
import { Search as SearchInline } from './modules/Search/SearchInline';
import { Search } from './modules/Search/Search';



function App() {
  const myTitle: string = 'Hello Vite Weather App';

  return (
    <div className={style.app}>
      <Container>
        <h1>{myTitle}</h1>
        <img src={logo} alt="logo vite" />
        <Search />
      </Container>
      <p>Lorem ipsum dolor sit amet consectetur </p>
    </div>
  )
}

export default App;
