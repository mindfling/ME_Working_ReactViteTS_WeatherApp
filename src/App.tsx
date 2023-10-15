import React from 'react'
import style from './App.module.scss'
import { Container } from './modules/Container/Container';
import logo from '/vite.svg';
import { Search } from './modules/Search/Search';


function App() {
  const myTitle: string = 'Hello Vite Weather App';

  return (
    <div className={style.app}>
      <Container>
        <h1>{myTitle}</h1>
        <img src={logo} alt="logo vite" />
        <p>helllo world!!!</p>
        container hello
        <Search />
      </Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
  )
}

export default App;
