import React, { useState, forwardRef } from 'react'
import { motion } from 'framer-motion'
import cl from './newYear.module.scss'
import { CSSTransition } from 'react-transition-group'
import Heart from '../Heart'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToFeatured,
  deleteFromFeatured,
} from '../../store/reducers/featuredSlice'
import { Ukrasheniya } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'

interface VariantProps {
  toys: Ukrasheniya[]
  toy: Ukrasheniya
  index: number
}

const Variant = forwardRef(({ toy, toys, index }: VariantProps, ref: any) => {
  const toysImages: Ukrasheniya[] = [
    { title: 'Игрушка №001', src: './images/toys/1.jpg', ident: 'ngtoy1' },
    { title: 'Игрушка №002', src: './images/toys/2.jpg', ident: 'ngtoy2' },
    { title: 'Игрушка №003', src: './images/toys/3.jpg', ident: 'ngtoy3' },
    { title: 'Игрушка №004', src: './images/toys/4.jpg', ident: 'ngtoy4' },
    { title: 'Игрушка №005', src: './images/toys/5.jpg', ident: 'ngtoy5' },
    { title: 'Игрушка №006', src: './images/toys/6.jpg', ident: 'ngtoy6' },
    { title: 'Игрушка №007', src: './images/toys/7.jpg', ident: 'ngtoy7' },
    { title: 'Игрушка №008', src: './images/toys/8.jpg', ident: 'ngtoy8' },
    { title: 'Игрушка №009', src: './images/toys/9.jpg', ident: 'ngtoy9' },
    { title: 'Игрушка №010', src: './images/toys/10.jpg', ident: 'ngtoy10' },
    { title: 'Игрушка №011', src: './images/toys/11.jpg', ident: 'ngtoy11' },
    { title: 'Игрушка №012', src: './images/toys/12.jpg', ident: 'ngtoy12' },
    { title: 'Игрушка №013', src: './images/toys/13.jpg', ident: 'ngtoy13' },
    { title: 'Игрушка №014', src: './images/toys/14.jpg', ident: 'ngtoy14' },
    { title: 'Игрушка №015', src: './images/toys/15.jpg', ident: 'ngtoy15' },
    { title: 'Игрушка №016', src: './images/toys/16.jpg', ident: 'ngtoy16' },
  ]

  const [popup, setPopup] = useState<boolean>(false)

  let src
  toysImages.forEach((toy: Ukrasheniya, id: number) => {
    if (index === id) {
      src = toy.src
    }
  })

  const { featured } = useAppSelector((state) => state.featured)
  const dispatch = useAppDispatch()

  return (
    <>
      <div ref={ref} className={cl.toyVariant} onClick={() => setPopup(true)}>
        <img src={toy.src} alt='' className={cl.variantImg} />
        <div className={cl.variantTitleContainer}>
          <p>{toy.title}</p>
          <Heart
            className={cl.heart}
            isFilled={
              !!featured.find(
                (featuredItem: string) => featuredItem === toy?.ident
              )
            }
            onClick={(e: React.MouseEvent) => {
              !featured.find(
                (featuredItem: string) => featuredItem === toy.ident
              )
                ? dispatch(addToFeatured(toy.ident))
                : dispatch(deleteFromFeatured(toy.ident))
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
})

const MVariant = motion(Variant)
export default MVariant
