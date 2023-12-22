import React, { useState } from 'react'
import cl from './newYear.module.scss'
import { CSSTransition } from 'react-transition-group'
import Heart from '../Heart'
import { useActions } from '../../store/hooks/useActions'
import { userTypedSelector } from '../../store/hooks/UseTypedSelector'

export default function Tovar({array, index}: any) {

  const [popup, setPopup] = useState(false)

  const images = [
    {src: './images/newYear/2.jpg'},
    {src: './images/newYear/3.jpg'},
    {src: './images/newYear/4.jpg'},
    {src: './images/newYear/1.jpg'}
  ]
  
  let src
  images.map((image, id) => {
    if (index == id) {
      src = image.src
    }
  })
  const {featured} = userTypedSelector(state => state.featured)
  const {addFeatured, removeFeatured} = useActions()

  return (
    <>
      <div className={cl.tovarContainer} onClick={() => setPopup(true)}>
        <img src={array.src} alt={array} className={cl.tovarImg}/>
        <div className={cl.titleContainer}>
          <div className={cl.tovarPrice}>{array.price}</div>
          <div className={cl.tovarTitle}>{array.title}</div>
          <Heart className={cl.heart} isFilled={featured.find(item => item === array)} onClick={(e: any) => {
            !featured.find(item => item === array) ? addFeatured(array) : removeFeatured(array)
            e.stopPropagation()
            }}/>
        </div>
      </div>

      <CSSTransition in={popup} timeout={200} classNames='tovarpopup' mountOnEnter unmountOnExit>
                <div className={cl.popup} onClick={() => setPopup(false)}>
                  <img src={src} alt='' onClick={e => e.stopPropagation()}/>
               </div>
      </CSSTransition>
    </>
  )
}