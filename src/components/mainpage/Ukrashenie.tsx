import React, {FC} from 'react'
import cl from './mainpage.module.scss'
import { Ukrashenia } from '../../types/types'
interface UkrashenieProps {
  ukrashenie: Ukrashenia
}
export default function Ukrashenie({ukrashenie}: UkrashenieProps) {
  return (
    <div className={cl.ukrashenieContainer}>
      <img src={ukrashenie.src} alt="" className='w-auto'/>
      <p>{ukrashenie.text}</p>
    </div>
  )
}
