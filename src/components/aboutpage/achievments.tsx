import React, { FC, forwardRef, useState } from 'react'
import cl from './about.module.scss'
import { CSSTransition } from 'react-transition-group'
import { Achievments } from '../assets/types'
import { motion } from 'framer-motion'

interface AchievmentProps {
  achievments: Achievments[]
  index: number
  achievment: Achievments
}

const Achievment = forwardRef(
  ({ achievments, index, achievment }: AchievmentProps, ref: any) => {
    const [popup, setPopup] = useState<boolean>(false)

    let src
    achievments.map((achievment: Achievments, id: number) => {
      if (index === id) {
        src = achievment.src
      }
    })

    return (
      <>
        <div className={cl.achievment} onClick={() => setPopup(true)} ref={ref}>
          <img src={achievment.src} alt='' />
          <p>{achievment.description}</p>
        </div>
        <CSSTransition
          in={popup}
          timeout={200}
          classNames='tovarpopup'
          mountOnEnter
          unmountOnExit
        >
          <div className={cl.popup} onClick={() => setPopup(false)}>
            <img
              src={src}
              alt=''
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
          </div>
        </CSSTransition>
      </>
    )
  }
)
const MAchievment = motion(Achievment)

export default MAchievment
