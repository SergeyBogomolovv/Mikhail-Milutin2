import React from 'react'
import cl from './about.module.scss'
import Achievment from './achievments'
import { Achievments } from '../../types/types'


export default function About() {
    const achievments: Achievments[] = [
        {src: './images/achievments/1.jpeg', description: 'В 2022 году стал призером выставки «Гохран России», в номинации «Использование нетрадиционных материалов в авторских работах»'},
        {src: './images/achievments/2.jpg', description: 'В 2021 году стал призером ювелирной выставки J – 1, в номинации «Лучшее ювелирное искусство».'},
        {src: './images/achievments/4.jpg', description: 'В 2019 году стал призером выставки «Гохран России», в номинации «Ювелирные техники: традиции и мастерство»'},
        {src: './images/achievments/3.jpg', description: 'С 2020 года состоит в Международной Академии творчества'},
    ]
    
  return (
    <>
    <div className={cl.mainTitle}><p>Михаил Милютин</p></div>
     <div className={cl.container}>
        <img src='./images/mikhail.jpg' alt='' className={cl.photo}/>
        <div className={cl.description}>
          <p>Михаил Милютин – художник, создатель драгоценностей, один из ведущих ювелиров современной России. В студии Михаила Милютина создаются драгоценности для массовой продажи и уникальные произведения в единственном экземпляре. Украшения для мужчин и женщин и статусные памятные сувениры: ручки с драгоценным декором, печати и медали. Основные темы творчества это имперская атрибутика, мотивы живой природы, литературные сюжеты.</p>
          <p>Уникальные коллекции украшений посвящены архитектуре Северной столицы и сказке «Алиса в Стране чудес». Художественные идеи воплощаются в жизнь с помощью драгоценных металлов и минералов. Основным материалом в работах Милютина зачастую выступает белое золото. Фавориты Михаила среди камней для вставок - сапфиры, опалы и бриллианты.</p>
          <p>Произведения Михаила Милютина – синтез ювелирного мастерства и художественной фантазии. Из драгоценного сырья он создает осязаемые воплощения власти, величия и восхищения природой и человеческим творчеством.</p>
        </div>
     </div>
     <div className={cl.AchievmentTitle}>Достижения:</div>
     <div className={cl.achievmentsContainer}>
          {achievments.map((achievment: Achievments, index: number) => <Achievment key={achievment.src} achievment={achievment} index={index} achievments={achievments}/>)}
      </div>
    </>
  )
}