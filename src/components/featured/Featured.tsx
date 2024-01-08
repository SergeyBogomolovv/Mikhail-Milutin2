import React, { FC, useState } from 'react'
import cl from './featured.module.scss'
import { ukrasheniya } from '../assets/types'
import { useAppSelector } from '../../store/hooks/redux'
import { AnimatePresence, LayoutGroup, Variants } from 'framer-motion'
import MItem from './Item'
import { featuredItemAnimation } from '../assets/animations'

const Featured: FC = () => {
  const { featured } = useAppSelector((state) => state.featured)

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
                  (featuredItem: string) => featuredItem === ukrashenie.ident
                )
              ) {
                return (
                  <MItem
                    layout
                    variants={featuredItemAnimation}
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
