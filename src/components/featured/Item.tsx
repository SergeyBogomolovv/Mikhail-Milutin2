import React, { FC, useState } from 'react'
import Heart from '../Heart'
import cl from './featured.module.scss'
import { useActions } from '../../store/hooks/useActions'
import { userTypedSelector } from '../../store/hooks/UseTypedSelector'
import { Ukrasheniya } from '../../types/types'

interface FeaturedItemProps {
  item: Ukrasheniya
}
const Item = ({item}: FeaturedItemProps) => {
  const {featured} = userTypedSelector(state => state.featured)

  const {addFeatured, removeFeatured} = useActions()

  return (
    <div className={cl.itemContainer} key={item.ident}>
        <img src={item.src} alt="" />
        <div className={cl.titleContainer}>
            <div className={cl.title}>{item.title}</div>
            <Heart onClick={() => {
              !featured.find(obj => obj == item.ident) ? addFeatured(item.ident) : removeFeatured(item.ident)
            }} isFilled={featured.find(obj => obj == item.ident)} className={cl.img}/>
        </div>
    </div>
  )
}

export default Item