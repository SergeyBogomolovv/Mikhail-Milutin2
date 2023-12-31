import React from 'react'
import cl from './mainpage.module.scss'
import Ukrashenie from './Ukrashenie'
import { Ukrashenia } from '../../types/types'
import { motion } from 'framer-motion'


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
        {ukrashenia.map(ukrashenie => <Ukrashenie key={ukrashenie.text} ukrashenie={ukrashenie}/>)}
      </div>
    </>
  )
}
