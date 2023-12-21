import React from 'react'
import cl from './footer.module.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={cl.container}>
      <Link className={cl.footItem} to='Politica'>Политика конфиденциальности</Link>
      <div className={cl.footItem}>Тел: +7 925 985 98 40</div>
      <div className={cl.footItem}>Email: m-milutin@mail.ru</div>
    </div>
  )
}