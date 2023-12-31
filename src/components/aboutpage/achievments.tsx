import React, { FC, useState } from 'react'
import cl from './about.module.scss'
import { CSSTransition } from 'react-transition-group'
import { Achievments } from '../../types/types'

interface AchievmentProps {
  achievments: Achievments[]
  index: number
  achievment: Achievments
}

const Achievment = ({achievments, index, achievment}: AchievmentProps) => {

  const [popup, setPopup] = useState<boolean>(false)

  let src
  achievments.map((achievment: Achievments, id: number) => {
    if (index == id) {
      src = achievment.src
    }
  })

  return (
    <>
      <div className={cl.achievment} onClick={() => setPopup(true)}>
        <img src={achievment.src} alt=''/>
      <p>{achievment.description}</p>
      </div>
      <CSSTransition in={popup} timeout={200} classNames='tovarpopup' mountOnEnter unmountOnExit>
        <div className={cl.popup} onClick={() => setPopup(false)}>
          <img src={src} alt='' onClick={(e: React.MouseEvent) => e.stopPropagation()}/>
        </div>
      </CSSTransition>
    </>
  )
}
export default Achievment