import React, { FC, forwardRef } from 'react'
import cl from './mainpage.module.scss'
import { Ukrashenia } from '../assets/types'
import { motion } from 'framer-motion'
interface UkrashenieProps {
  ukrashenie: Ukrashenia
}
const Ukrashenie = forwardRef(({ ukrashenie }: UkrashenieProps, ref: any) => {
  return (
    <div className={cl.ukrashenieContainer} ref={ref}>
      <img src={ukrashenie.src} alt='' className='w-auto' />
      <p>{ukrashenie.text}</p>
    </div>
  )
})

const MUkrashenie = motion(Ukrashenie)
export default MUkrashenie
