import React from 'react'
import style from './App.module.scss'


function App() {
  const myTitle: string = 'Hello Vite Weather App';

  return (
    <div className={style.app}>
      <h1>My Title</h1>
      <p>{myTitle}</p>
      <p>helllo world!!!</p>
    </div>
  )
}

export default App;
