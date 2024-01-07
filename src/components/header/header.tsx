import cl from './header.module.scss'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import HeaderPC from './HeaderPc'
import { setContactsTrue } from '../../store/reducers/contactsSlice'
import { useAppDispatch } from '../../store/hooks/redux'

function Header() {
  const setActive = ({ isActive }: any) =>
    isActive ? [cl.activeHeaderLink, cl.navItem].join(' ') : cl.navItem

  const [show, setShow] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const burgerClasses = [cl.burger]
  const mobile = [cl.mobile]
  const container = [cl.container]
  if (show) {
    burgerClasses.push(cl.active)
    mobile.push(cl.active)
    container.push(cl.active)
  }

  return (
    <>
      <div className={mobile.join(' ')} onClick={() => setShow(!show)}>
        <div className={cl.blur} />
        <div
          className={cl.itemsContainer}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <div className={cl.itemsTitle}>Выберите страницу</div>
          <hr />
          <NavLink
            className={setActive}
            to='about'
            onClick={() => setShow(false)}
          >
            Об Авторе
          </NavLink>
          <NavLink
            className={setActive}
            to='main'
            onClick={() => setShow(false)}
          >
            Главная{' '}
          </NavLink>
          <NavLink
            className={setActive}
            to='NewYear'
            onClick={() => setShow(false)}
          >
            Новогоднее настроение
          </NavLink>
          <NavLink
            className={setActive}
            to='Interesting'
            onClick={() => setShow(false)}
          >
            Интересное
          </NavLink>
          <NavLink
            className={setActive}
            to='/featured'
            onClick={() => setShow(false)}
          >
            Избранное
          </NavLink>
          <p
            className={cl.navItem}
            onClick={() => {
              setShow(false)
              dispatch(setContactsTrue())
            }}
          >
            Контакты
          </p>
          <a href='https://vk.com/id710234058'>
            <img src='./images/VK_Monochrome.png' alt='' />
          </a>
        </div>
      </div>

      <HeaderPC />
      <div className={cl.navbar}>
        <div className={cl.logoMobile}>MIKHAIL MILUTIN</div>
        <div className={cl.navItems}>
          <NavLink className={setActive} to='main'>
            Главная{' '}
          </NavLink>
          <NavLink className={setActive} to='about'>
            Об Авторе
          </NavLink>
          <NavLink className={setActive} to='NewYear'>
            Новогоднее настроение
          </NavLink>
          <NavLink className={setActive} to='Interesting'>
            Интересное
          </NavLink>
          <p className={cl.navItem} onClick={() => dispatch(setContactsTrue())}>
            Контакты
          </p>
        </div>
        <div className={burgerClasses.join(' ')} onClick={() => setShow(!show)}>
          <span></span>
        </div>
      </div>
      <hr className={cl.hr} />
    </>
  )
}

export default Header
{
  /* <p className={cl.navItem} onClick={() => openContacts()}>Контакты</p> */
}
