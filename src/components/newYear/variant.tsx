import React, { useState } from 'react'
import cl from './newYear.module.scss'
import { CSSTransition } from 'react-transition-group'
import { userTypedSelector } from '../../store/hooks/UseTypedSelector'
import { useActions } from '../../store/hooks/useActions'
import Heart from '../Heart'

export default function Variant({obj, array, index}: any) {
  const [popup, setPopup] = useState(false)
  
  let src
  array.map((image: any, id: number) => {
    if (index == id) {
      src = image.src
    }
  })

  const {featured} = userTypedSelector(state => state.featured)
  const {addFeatured, removeFeatured} = useActions()
  

  return (
    <>
      <div className={cl.toyVariant} onClick={() => setPopup(true)}>
          <div className={cl.variantTitleContainer}>
            <p>{obj.title}</p>
            <Heart className={cl.heart} isFilled={featured.find(item => item == obj.ident)} onClick={(e: React.MouseEvent) => {
            !featured.find(item => item == obj.ident) ? addFeatured(obj.ident) : removeFeatured(obj.ident)
            e.stopPropagation()
            }}/>
          </div>
          <img src={obj.src} alt='' className={cl.variantImg}/>
      </div>
      <CSSTransition in={popup} timeout={200} classNames='tovarpopup' mountOnEnter unmountOnExit>
        <div className={cl.popup} onClick={() => setPopup(false)}>
            <img src={src} alt='' onClick={(e: React.MouseEvent) => e.stopPropagation()}/>
        </div>
      </CSSTransition>
    </>
  )
}
