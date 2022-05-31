import React, { Children, useState } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import Facts from "./components/Facts";
// import NewsList from "./components/NewsList";
import NewsCard from "./components/NewsCard";
import Grid from "./components/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  // const [value, setValue] = useState('Текст в инпуте');

  const facts = [
    {
      id: "1",
      icon: <FontAwesomeIcon icon={["fas", "chart-pie"]} />,
      number: "8",
      title: "Разделов выставки",
    },

    {
      id: "2",
      icon: <FontAwesomeIcon icon={["fas", "users"]} />,
      number: "421",
      title: "Участник",
    },

    {
      id: "3",
      icon: <FontAwesomeIcon icon={["fas", "user"]} />,
      number: "20 467",
      title: "Посетителей",
    },

    {
      id: "4",
      icon: <FontAwesomeIcon icon={["fas", "volume-up"]} />,
      number: "80",
      title: "Спикеров",
    },
  ];

  const newsItems = [
    {
      id: 1,
      imgSrc: "https://ite-prod-cdn-end.azureedge.net/sharedmedia/rosupack/media/assets/foto_sergey_1024.jpg",
      date: "22 май 2022",
      title: "«Количество экспонентов RosUpack сохранилось на уровне прошлого года»",
      subtitle: "Сергей Дитёв, директор выставки RosUpack и Форума Printech, ответил на вопросы редакции журнала «Тара и упаковка»",
      link: "Читать далее",
    },
    {
      id: 2,
      imgSrc: "https://ite-prod-cdn-end.azureedge.net/sharedmedia/rosupack/media/assets/d-107_cr.jpg",
      date: "22 май 2022",
      title: "«Количество экспонентов RosUpack сохранилось на уровне прошлого года»",
      subtitle: "Сергей Дитёв, директор выставки RosUpack и Форума Printech, ответил на вопросы редакции журнала «Тара и упаковка»",
      link: "Читать далее",
    },
    {
      id: 3,
      imgSrc: "https://ite-prod-cdn-end.azureedge.net/sharedmedia/rosupack/media/assets/img_20211029_095152_1024.jpg",
      date: "22 май 2022",
      title: "«Количество экспонентов RosUpack сохранилось на уровне прошлого года»",
      subtitle: "Сергей Дитёв, директор выставки RosUpack и Форума Printech, ответил на вопросы редакции журнала «Тара и упаковка»",
      link: "Читать далее",
    },
    {
      id: 4,
      imgSrc: "https://ite-prod-cdn-end.azureedge.net/sharedmedia/rosupack/media/assets/_imu9421.jpg",
      date: "22 май 2022",
      title: "«Количество экспонентов RosUpack сохранилось на уровне прошлого года»",
      subtitle: "Сергей Дитёв, директор выставки RosUpack и Форума Printech, ответил на вопросы редакции журнала «Тара и упаковка»",
      link: "Читать далее",
    },
    {
      id: 5,
      imgSrc: "https://ite-prod-cdn-end.azureedge.net/sharedmedia/rosupack/media/assets/343434_1024.jpg",
      date: "22 май 2022",
      title: "«Количество экспонентов RosUpack сохранилось на уровне прошлого года»",
      subtitle: "Сергей Дитёв, директор выставки RosUpack и Форума Printech, ответил на вопросы редакции журнала «Тара и упаковка»",
      link: "Читать далее",
    },
    {
      id: "6",
      imgSrc: "https://ite-prod-cdn-end.azureedge.net/sharedmedia/rosupack/media/assets/1024_00.jpg",
      date: "22 май 2022",
      title: "«Количество экспонентов RosUpack сохранилось на уровне прошлого года»",
      subtitle: "Сергей Дитёв, директор выставки RosUpack и Форума Printech, ответил на вопросы редакции журнала «Тара и упаковка»",
      link: "Читать далее",
    },
    {
      id: 7,
      imgSrc: "https://ite-prod-cdn-end.azureedge.net/sharedmedia/rosupack/media/assets/overcrease_flat-bed-3.jpg",
      date: "22 май 2022",
      title: "«Количество экспонентов RosUpack сохранилось на уровне прошлого года»",
      subtitle: "Сергей Дитёв, директор выставки RosUpack и Форума Printech, ответил на вопросы редакции журнала «Тара и упаковка»",
      link: "Читать далее",
    },
    {
      id: 8,
      imgSrc: "https://ite-prod-cdn-end.azureedge.net/sharedmedia/rosupack/media/assets/00_imu9421.jpg",
      date: "22 май 2022",
      title: "«Количество экспонентов RosUpack сохранилось на уровне прошлого года»",
      subtitle: "Сергей Дитёв, директор выставки RosUpack и Форума Printech, ответил на вопросы редакции журнала «Тара и упаковка»",
      link: "Читать далее",
    },
  ];

  return (
    <div className="App">
      {/* <ClassCounter/>
      <Counter/> */}
      <Facts data={facts} />
      {/* <NewsList articleList={newsItems}/> */}
      <Grid>
      {newsItems.map((articleItem) => {
        return (
          <NewsCard
            key={articleItem.id}
            imgSrc={articleItem.imgSrc}
            date={articleItem.date}
            title={articleItem.title}
            subtitle={articleItem.subtitle}
            link={articleItem.link}
          />
        )
      })}

      </Grid>
    </div>
  );
}
export default App;
