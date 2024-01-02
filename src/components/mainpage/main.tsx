import React from 'react'
import cl from './mainpage.module.scss'
import Ukrashenie from './Ukrashenie'
import { Ukrashenia } from '../../types/types'
import { motion } from 'framer-motion'
import MUkrashenie from './Ukrashenie'

export default function Main() {
  const ukrashenia: Ukrashenia[] = [
    { src: './images/main/brasleti.png', text: 'Браслеты' },
    { src: './images/main/brosh.png', text: 'Подвески' },
    { src: './images/main/zhemchug.png', text: 'Жемчуг' },
    { src: './images/main/sergi.png', text: 'Серьги' },
    { src: './images/main/koltsa.png', text: 'Кольца' },
    { src: './images/main/garnitur.png', text: 'Гарнитур' },
    { src: './images/main/raznoe.png', text: 'Разное' },
  ]
  const ukrashenieAnimation = {
    visible: (i: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
    hidden: {
      x: 100,
      y: -20,
      opacity: 0,
    },
  }
  return (
    <>
      <div className={cl.container}>
        {ukrashenia.map((ukrashenie, index: number) => (
          <MUkrashenie
            key={ukrashenie.text}
            ukrashenie={ukrashenie}
            variants={ukrashenieAnimation}
            whileInView='visible'
            initial='hidden'
            custom={index}
          />
        ))}
      </div>
    </>
  )
}
