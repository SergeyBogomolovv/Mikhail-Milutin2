import React, { useState } from 'react'
import cl from './newYear.module.scss'
import { CSSTransition } from 'react-transition-group'
import { userTypedSelector } from '../../store/hooks/UseTypedSelector'
import { useActions } from '../../store/hooks/useActions'

export default function Variant({obj, array, index}: any) {
  const [popup, setPopup] = useState(false)
  
  let src
  array.map((image: any, id: number) => {
    if (index == id) {
      src = image.src
    }
  })

  

  return (
    <>
      <div className={cl.toyVariant} onClick={() => setPopup(true)}>
          <p>{obj.title}</p>
          <img src={obj.src} alt='' className={cl.variantImg}/>
      </div>
      <CSSTransition in={popup} timeout={200} classNames='tovarpopup' mountOnEnter unmountOnExit>
        <div className={cl.popup} onClick={() => setPopup(false)}>
            <img src={src} alt='' onClick={e => e.stopPropagation()}/>
        </div>
      </CSSTransition>
    </>
  )
}
