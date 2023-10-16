import style from './Result.module.scss';
import ClounIcon from './MyCloudIcon';
import { useAppSelector } from '../../hooks';


const Result = () => {
  const { weather, isLoading, error } = useAppSelector(
    (state) => state.weather,
  );
  return (
    <div className={style.result}>
      { isLoading ? (
          <p>Загрузка данных...</p>
        ) : (weather.name ? (
          <>
            <p><b>+{weather.main.temp}&#8451;</b></p>
            <p>Город&nbsp;<b>{weather.name}</b>&nbsp;<ClounIcon /></p>
          </>
        ) : (error === 'Not Found' ? (
          <p>Город не найден</p>
        ) : (
          <p>Введите город</p>
        ))
      )}
    </div>
  );

  // return (
  //   <div className={style.result}>
  //     <p>Город&nbsp;<b>{props.town}</b>&nbsp;<ClounIcon /></p>
  //     <p><b>+{props.temp}&#8451;</b></p>
  //   </div>
  // )
}

export default Result
