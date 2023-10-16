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
      <p>
        Город <b>{props.town}</b> 
        &nbsp; <b>+{props.temp}&#8451;</b> 
        &nbsp;<ClounIcon/>
      </p>
    </div>
  )
}

export default Result
