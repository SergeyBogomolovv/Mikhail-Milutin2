import React, { useState } from 'react'
import cl from './newYear.module.scss'
import { CSSTransition } from 'react-transition-group'
import Heart from '../Heart'
import { useDispatch, useSelector } from 'react-redux'
import { addToFeatured, deleteFromFeatured } from '../../store/reducers/featuredSlice'
import { Ukrasheniya } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'

interface VariantProps {
  toys: Ukrasheniya[]
  toy: Ukrasheniya
  index: number
}

export default function Variant({toy, toys, index}: VariantProps) {
  
  const [popup, setPopup] = useState<boolean>(false)
  
  let src
  toys.forEach((toy: Ukrasheniya, id: number) => {
    if (index == id) {
      src = toy.src
    }
  })
  
  const {featured} = useAppSelector(state => state.featured)
  const dispatch = useAppDispatch()


  return (
    <>
      <div className={cl.toyVariant} onClick={() => setPopup(true)}>
          <div className={cl.variantTitleContainer}>
            <p>{toy.title}</p>
            <Heart className={cl.heart} isFilled={!!featured.find((featuredItem: string) => featuredItem === toy?.ident)} onClick={(e: React.MouseEvent) => {
            !featured.find((featuredItem: string) => featuredItem == toy.ident) ? dispatch(addToFeatured(toy.ident)) : dispatch(deleteFromFeatured(toy.ident))
            e.stopPropagation()
            }}/>
          </div>
          <img src={toy.src} alt='' className={cl.variantImg}/>
      </div>

      <CSSTransition in={popup} timeout={200} classNames='tovarpopup' mountOnEnter unmountOnExit>
        <div className={cl.popup} onClick={() => setPopup(false)}>
            <img src={src} alt='' onClick={(e: React.MouseEvent) => e.stopPropagation()}/>
        </div>
      </CSSTransition>
    </>
  )
}