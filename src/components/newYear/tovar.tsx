import React, { useState } from 'react'
import cl from './newYear.module.scss'
import { CSSTransition } from 'react-transition-group'
import Heart from '../Heart'
import { Ukrasheniya } from '../assets/types'
import {
  addToFeatured,
  deleteFromFeatured,
} from '../../store/reducers/featuredSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'

interface TovarProps {
  tovar: Ukrasheniya
  index: number
}

export default function Tovar({ tovar, index }: TovarProps) {
  const [popup, setPopup] = useState<boolean>(false)

  const images = [
    { src: './images/newYear/2.jpg' },
    { src: './images/newYear/3.jpg' },
    { src: './images/newYear/4.jpg' },
    { src: './images/newYear/1.jpg' },
  ]

  let src
  images.forEach((image, id) => {
    if (index == id) {
      src = image.src
    }
  })

  const { featured } = useAppSelector((state) => state.featured)

  const dispatch = useAppDispatch()

  return (
    <>
      <div className={cl.tovarContainer} onClick={() => setPopup(true)}>
        <img src={tovar.src} className={cl.tovarImg} />
        <div className={cl.titleContainer}>
          <div className={cl.tovarPrice}>{tovar.price}</div>
          <div className={cl.tovarTitle}>{tovar.title}</div>
          <Heart
            className={cl.heart}
            isFilled={
              !!featured.find(
                (featuredItem: string) => featuredItem == tovar.ident
              )
            }
            onClick={(e: React.MouseEvent) => {
              !featured.find(
                (featuredItem: string) => featuredItem == tovar.ident
              )
                ? dispatch(addToFeatured(tovar.ident))
                : dispatch(deleteFromFeatured(tovar.ident))
              e.stopPropagation()
            }}
          />
        </div>
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
