import React, { FC, useState } from 'react'
import cl from './featured.module.scss'
import Tovar from '../newYear/tovar'
import Heart from '../Heart'
import Item from './Item'
import { userTypedSelector } from '../../store/hooks/UseTypedSelector'
import { useActions } from '../../store/hooks/useActions'
import { ukrasheniya } from '../../types/types'
const Featured: FC = () => {

    const {featured} = userTypedSelector(state => state.featured)
    

    return (
        <div>
            <h1 className={cl.mainTitle}>Избранное:</h1>
            <div className={cl.container}>
                {ukrasheniya.map((ukrashenie) => {
                    if (featured.find(ident => ident == ukrashenie.ident)) {
                        return <Item item={ukrashenie} key={ukrashenie.ident}/>
                    }
                })}
            </div>
        </div>
  )
}

export default Featured
