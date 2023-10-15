import React from 'react'
import style from './App.module.scss'
import { Container } from './modules/Container/Container';


function App() {
  const myTitle: string = 'Hello Vite Weather App';

  return (
    <div className={style.app}>
      <h1>{myTitle}</h1>
      <p>helllo world!!!</p>
      <Container>
        container hello 
      </Container>
    </div>
  )
}

export default App;
