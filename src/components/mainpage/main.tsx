import React from 'react'
import cl from './mainpage.module.scss'
import Ukrashenie from './Ukrashenie'

interface Ukrashenia {
  src: string
  text: string
}
export default function Main() {
    const ukrashenia: Ukrashenia[] = [
        {src: './images/main/brasleti.png', text: 'Браслеты'},
        {src: './images/main/brosh.png', text: 'Подвески'},
        {src: './images/main/zhemchug.png', text: 'Жемчуг'},
        {src: './images/main/sergi.png', text: 'Серьги'},
        {src: './images/main/koltsa.png', text: 'Кольца'},
        {src: './images/main/garnitur.png', text: 'Гарнитур'},
        {src: './images/main/raznoe.png', text: 'Разное'},
    ]
  return (
    <>
      <div className={cl.container}>
        {ukrashenia.map(item => <Ukrashenie key={item.text} ukrashenie={item}/>)}
      </div>
    </>
  )
}
