import React, { FC, useState } from 'react'
import cl from './featured.module.scss'
import Tovar from '../newYear/tovar'
import Heart from '../Heart'
import Item from './Item'
import { ukrasheniya } from '../../types/types'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../store/hooks/redux'
import { AnimatePresence, LayoutGroup, Variants } from 'framer-motion'
import MItem from './Item'

const Featured: FC = () => {
  const { featured } = useAppSelector((state) => state.featured)
  const itemAnimation: Variants = {
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
    },
    hidden: {
      x: -100,
      y: 50,
      opacity: 0,
      scale: 0.5,
    },
    exit: {
      x: -200,
      y: -100,
      opacity: 0,
      scale: 0.5,
      rotate: -30,
    },
  }
  return (
    <div className='flex-grow'>
      {featured.length === 0 ? (
        <h1 className={cl.mainTitle}>Избранного пока что нет</h1>
      ) : (
        <h1 className={cl.mainTitle}>Избранное:</h1>
      )}
      <div className={cl.container}>
        <LayoutGroup>
          <AnimatePresence>
            {ukrasheniya.map((ukrashenie) => {
              if (
                featured.find(
                  (featuredItem: string) => featuredItem == ukrashenie.ident
                )
              ) {
                return (
                  <MItem
                    layout
                    variants={itemAnimation}
                    animate='visible'
                    initial='hidden'
                    exit='exit'
                    item={ukrashenie}
                    key={ukrashenie.ident}
                  />
                )
              }
            })}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  )
}

export default Featured
