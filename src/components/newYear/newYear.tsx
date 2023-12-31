import React, { useState } from 'react'
import cl from './newYear.module.scss'
import Tovar from './tovar'
import { Ukrasheniya } from '../../types/types'
import { motion } from 'framer-motion'
import MVariant from './variant'

export default function NewYear() {
  const toys: Ukrasheniya[] = [
    { title: 'Игрушка №001', src: './images/toys/1.png', ident: 'ngtoy1' },
    { title: 'Игрушка №002', src: './images/toys/2.png', ident: 'ngtoy2' },
    { title: 'Игрушка №003', src: './images/toys/3.png', ident: 'ngtoy3' },
    { title: 'Игрушка №004', src: './images/toys/4.png', ident: 'ngtoy4' },
    { title: 'Игрушка №005', src: './images/toys/5.png', ident: 'ngtoy5' },
    { title: 'Игрушка №006', src: './images/toys/6.png', ident: 'ngtoy6' },
    { title: 'Игрушка №007', src: './images/toys/7.png', ident: 'ngtoy7' },
    { title: 'Игрушка №008', src: './images/toys/8.png', ident: 'ngtoy8' },
    { title: 'Игрушка №009', src: './images/toys/9.png', ident: 'ngtoy9' },
    { title: 'Игрушка №010', src: './images/toys/10.png', ident: 'ngtoy10' },
    { title: 'Игрушка №011', src: './images/toys/11.png', ident: 'ngtoy11' },
    { title: 'Игрушка №012', src: './images/toys/12.png', ident: 'ngtoy12' },
    { title: 'Игрушка №013', src: './images/toys/13.png', ident: 'ngtoy13' },
    { title: 'Игрушка №014', src: './images/toys/14.png', ident: 'ngtoy14' },
    { title: 'Игрушка №015', src: './images/toys/15.png', ident: 'ngtoy15' },
    { title: 'Игрушка №016', src: './images/toys/16.png', ident: 'ngtoy16' },
  ]

  const tovars: Ukrasheniya[] = [
    {
      title: 'Подвески',
      src: './images/newYear/2.1.png',
      price: '50 000₽',
      ident: 'podveski-ng',
    },
    {
      title: 'Французская застежка',
      src: './images/newYear/3.1.png',
      price: '110 000₽',
      ident: 'francuzskaya-zastezhka-ng',
    },
    {
      title: 'Серьги-трансформеры',
      src: './images/newYear/4.1.png',
      price: '120 000₽',
      ident: 'transformery-1-ng',
    },
    {
      title: 'Серьги-трансформеры',
      src: './images/newYear/1.1.png',
      price: '120 000₽',
      ident: 'transformery-2-ng',
    },
  ]

  const tovarsAnimation = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, x: 100, y: -50 },
  }

  const variantsAnimation = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 50 },
  }

  const textAnimation = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
      },
    },
    hidden: { opacity: 0, y: 100 },
  }
  const [show, setShow] = useState(false)

  const mapToys: Ukrasheniya[] = []

  if (show) {
    mapToys.push(...toys)
  } else {
    if (window.innerWidth > 550) {
      mapToys.push(toys[0], toys[1], toys[2], toys[3])
    } else {
      mapToys.push(toys[0], toys[1], toys[2])
    }
  }

  return (
    <motion.div>
      <motion.div
        className={cl.title}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{
          duration: 0.1,
          type: 'just',
        }}
      >
        Встречайте новую ювелирную коллекцию
        <br />
        <br />
        Новогоднее настроение - елочные игрушки ручной работы!
      </motion.div>

      <div className={cl.TovarsContainer}>
        {tovars.map((tovar, index) => (
          <motion.div
            key={tovar.src}
            variants={tovarsAnimation}
            initial='hidden'
            animate='visible'
            custom={index}
          >
            <Tovar tovar={tovar} index={index} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className={cl.description}
        variants={textAnimation}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        Цветовым многообразием украшения обязаны своим инновационным покрытиям -
        полимерной керамике и современным светополимерным материалам. Эти
        современные материалы не только по-новогоднему яркие, но и исключительно
        прочные, поэтому не придется переживать за украшения так, как в канун
        праздника переживают за сохранность любимых елочных игрушек. На одной
        цепочке могут отлично смотреться сразу несколько красочных
        шариков-кулонов в сочетании с серьгами на изящных французских застежках,
        а серьги-трансформеры позволяют менять игрушки и носить их в любом
        сочетании между собой, в том числе и в виде подвески.
      </motion.div>

      <div className={cl.notion}>
        Серьги можно приобрести как в паре, так и по одной.
        <br /> Шарики-подвески также можно приобрести по одному.
      </div>

      <hr />

      <div className={cl.variantsTitle}>Варианты игрушек:</div>

      <div className={cl.variantsContainer}>
        {mapToys.map((toy, index) => (
          <MVariant
            toy={toy}
            toys={toys}
            index={index}
            key={toy.title}
            variants={variantsAnimation}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          />
        ))}
      </div>

      <div className={cl.showButton} onClick={() => setShow(!show)}>
        {show ? 'Свернуть' : 'Показать еще'}
      </div>
    </motion.div>
  )
}
