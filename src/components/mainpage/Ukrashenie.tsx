import React from 'react'
import cl from './mainpage.module.scss'

export default function Ukrashenie({ukrashenie}: any) {
  return (
    <div className={cl.ukrashenieContainer}>
      <img src={ukrashenie.src} alt="" className='w-auto'/>
      <p>{ukrashenie.text}</p>
    </div>
  )
}
