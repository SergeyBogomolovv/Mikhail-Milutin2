import React, { FC, useState } from 'react'
import cl from './about.module.scss'
import { CSSTransition } from 'react-transition-group'


const Achievment = ({array, index, obj}: any) => {
  const [popup, setPopup] = useState(false)

  let src
  array.map((image: any, id: number) => {
    if (index == id) {
      src = image.src
    }
  })

  return (
    <>
      <div className={cl.achievment} onClick={() => setPopup(true)}>
        <img src={obj.src} alt=''/>
      <p>{obj.description}</p>
    </div>
    <CSSTransition in={popup} timeout={200} classNames='tovarpopup' mountOnEnter unmountOnExit>
    <div className={cl.popup} onClick={() => setPopup(false)}>
      <img src={src} alt='' onClick={e => e.stopPropagation()}/>
   </div>
  </CSSTransition>
    </>
    
  )
}
export default Achievment