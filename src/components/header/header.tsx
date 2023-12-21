import cl from './header.module.scss'
import { FC, useState } from 'react';
import {useDispatch} from 'react-redux'
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import { useActions } from '../../store/hooks/useActions';
import HeaderPC from './HeaderPc';

function Header() {
  ////////////////
  const setActive = ({isActive}: any) => isActive ? [cl.navItem, 'active-header-link'].join(' ') : [cl.navItem,''].join(' ')
  ////////////////
  const [show, setShow] = useState(false)
  const {openContacts} = useActions()

  const burgerClasses = [cl.burger]
  const mobile = [cl.mobile]
  const container = [cl.container]
    if(show) {
      burgerClasses.push(cl.active)
      mobile.push(cl.active)
      container.push(cl.active)
    }

  return (
    <>
      <div className={mobile.join(' ')} onClick={() => setShow(!show)}>
        <div className={cl.blur}/>
        <div className={cl.itemsContainer} onClick={e => e.stopPropagation()}>
          <div className={cl.itemsTitle}>Выберите страницу</div>
          <hr/>
            <NavLink className={cl.navItem} to='about' onClick={() => setShow(false)}>Об Авторе</NavLink>
            <NavLink className={cl.navItem} to='main' onClick={() => setShow(false)}>Главная </NavLink>
            <NavLink className={cl.navItem} to='NewYear' onClick={() => setShow(false)}>Новогоднее настроение</NavLink>
            <NavLink className={cl.navItem} to='Interesting' onClick={() => setShow(false)}>Интересное</NavLink>
            <Link className={cl.navItem} to='/featured' onClick={() => setShow(false)}>Избранное</Link>
            <p className={cl.navItem} onClick={() => {
              setShow(false)
              openContacts()}}>Контакты</p>
          <a href="https://vk.com/id710234058"><img src='./images/VK_Monochrome.png' alt=''/></a>
        </div>
      </div>
      
      <HeaderPC/>
      <div className={cl.navbar}>
          <div className={cl.logoMobile}>MIKHAIL MILUTIN</div>            
            <div className={cl.navItems}>
              <NavLink className={cl.navItem} to='main'>Главная </NavLink>
              <NavLink className={cl.navItem} to='about'>Об Авторе</NavLink>
              <NavLink className={cl.navItem} to='NewYear'>Новогоднее настроение</NavLink>
              <NavLink className={cl.navItem} to='Interesting'>Интересное</NavLink>
              <p className={cl.navItem} onClick={() => openContacts()}>Контакты</p>
            </div>
            <div className={burgerClasses.join(' ')} onClick={() => setShow(!show)}>
              <span></span>
            </div>
        </div>
        <hr className={cl.hr}/>
    </>
  );
}

export default Header;
{/* <p className={cl.navItem} onClick={() => openContacts()}>Контакты</p> */}
