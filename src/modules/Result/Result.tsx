import React from 'react';
import style from './Result.module.scss';
import ClounIcon from './MyCloudIcon';


type Props = {
  town: string;
  temp: number;
}

const Result = (props: Props) => {
  return (
    <div className={style.result}>
      <p>Город&nbsp;<b>{props.town}</b>&nbsp;<ClounIcon/></p>
      <p><b>+{props.temp}&#8451;</b></p> 
    </div>
  )
}

export default Result
