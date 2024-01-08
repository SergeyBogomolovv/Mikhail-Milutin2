import React, { FC, forwardRef, useState } from 'react'
import Heart from '../Heart'
import cl from './featured.module.scss'
import { Ukrasheniya } from '../../types/types'
import {
  addToFeatured,
  deleteFromFeatured,
} from '../../store/reducers/featuredSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { motion } from 'framer-motion'

interface FeaturedItemProps {
  item: Ukrasheniya
}

const Item = forwardRef(({ item }: FeaturedItemProps, ref: any) => {
  const { featured } = useAppSelector((state) => state.featured)
  const dispatch = useAppDispatch()

  return (
    <div ref={ref} className={cl.itemContainer} key={item.ident}>
      <img src={item.src} alt='' />
      <div className={cl.titleContainer}>
        <div className={cl.title}>{item.title}</div>
        <Heart
          onClick={() => {
            !featured.find(
              (featuredItem: string) => featuredItem === item.ident
            )
              ? dispatch(addToFeatured(item.ident))
              : dispatch(deleteFromFeatured(item.ident))
          }}
          isFilled={
            !!featured.find(
              (featuredItem: string) => featuredItem === item.ident
            )
          }
          className={cl.img}
        />
      </div>
    </div>
  )
})
const MItem = motion(Item)
export default MItem
