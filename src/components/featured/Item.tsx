import React, { FC, useState } from 'react'
import Heart from '../Heart'
import cl from './featured.module.scss'
import { useActions } from '../../store/hooks/useActions'
import { userTypedSelector } from '../../store/hooks/UseTypedSelector'


const Item = ({item}: any) => {
  const {featured} = userTypedSelector(state => state.featured)

  const {addFeatured, removeFeatured} = useActions()

  return (
    <div className={cl.itemContainer} key={item.ident}>
        <img src={item.src} alt="" />
        <div className={cl.titleContainer}>
            <div className={cl.title}>{item.title}</div>
            <Heart onClick={() => {
              !featured.find(obj => obj == item) ? addFeatured(item) : removeFeatured(item)
            }} isFilled={featured.find(obj => obj == item)} className={cl.img}/>
        </div>
    </div>
  )
}

export default Item
