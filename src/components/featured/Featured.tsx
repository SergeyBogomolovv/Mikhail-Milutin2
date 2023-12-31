import React, { FC, useState } from 'react'
import cl from './featured.module.scss'
import Tovar from '../newYear/tovar'
import Heart from '../Heart'
import Item from './Item'
import { ukrasheniya } from '../../types/types'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../store/hooks/redux'

const Featured: FC = () => {

    const {featured} = useAppSelector(state => state.featured)
    
    return (
        <div>
            <h1 className={cl.mainTitle}>Избранное:</h1>
            <div className={cl.container}>
                {ukrasheniya.map((ukrashenie) => {
                    if (featured.find((featuredItem: string) => featuredItem == ukrashenie.ident)) {
                        return <Item item={ukrashenie} key={ukrashenie.ident}/>
                    }
                })}
            </div>
        </div>
  )
}

export default Featured
