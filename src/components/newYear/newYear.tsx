import React, { useState } from 'react'
import cl from './newYear.module.scss'
import Variant from './variant'
import Tovar from './tovar'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { userTypedSelector } from '../../store/hooks/UseTypedSelector'
import { useActions } from '../../store/hooks/useActions'
import { Ukrasheniya } from '../../types/types'

interface Toy {
  title: string
  src: string
}

export default function NewYear() {

    const toys: Ukrasheniya[] = [
      {title: 'Игрушка №001', src: './images/toys/1.jpg', ident: 'ngtoy1'},
      {title: 'Игрушка №002', src: './images/toys/2.jpg', ident: 'ngtoy2'},
      {title: 'Игрушка №003', src: './images/toys/3.jpg', ident: 'ngtoy3'},
      {title: 'Игрушка №004', src: './images/toys/4.jpg', ident: 'ngtoy4'},
      {title: 'Игрушка №005', src: './images/toys/5.jpg', ident: 'ngtoy5'},
      {title: 'Игрушка №006', src: './images/toys/6.jpg', ident: 'ngtoy6'},
      {title: 'Игрушка №007', src: './images/toys/7.jpg', ident: 'ngtoy7'},
      {title: 'Игрушка №008', src: './images/toys/8.jpg', ident: 'ngtoy8'},
      {title: 'Игрушка №009', src: './images/toys/9.jpg', ident: 'ngtoy9'},
      {title: 'Игрушка №010', src: './images/toys/10.jpg', ident: 'ngtoy10'},
      {title: 'Игрушка №011', src: './images/toys/11.jpg', ident: 'ngtoy11'},
      {title: 'Игрушка №012', src: './images/toys/12.jpg', ident: 'ngtoy12'},
      {title: 'Игрушка №013', src: './images/toys/13.jpg', ident: 'ngtoy13'},
      {title: 'Игрушка №014', src: './images/toys/14.jpg', ident: 'ngtoy14'},
      {title: 'Игрушка №015', src: './images/toys/15.jpg', ident: 'ngtoy15'},
      {title: 'Игрушка №016', src: './images/toys/16.jpg', ident: 'ngtoy16'},
    ]

    const tovars: Ukrasheniya[] = [
      {title: 'Подвески', src: './images/newYear/2.1.png', price: '50 000₽', ident: 'podveski-ng'},
      {title: 'Французская застежка', src: './images/newYear/3.1.png', price: '110 000₽', ident: 'francuzskaya-zastezhka-ng'},
      {title: 'Серьги-трансформеры', src: './images/newYear/4.1.png', price: '120 000₽', ident: 'transformery-1-ng'},
      {title: 'Серьги-трансформеры', src: './images/newYear/1.1.png', price: '120 000₽', ident: 'transformery-2-ng'},
    ]

    const [show, setShow] = useState(false)
    const notLoadedToys: Toy[] = []

    if (window.innerWidth > 550) {
      notLoadedToys.push(toys[0], toys[1], toys[2], toys[3])
    } else {
      notLoadedToys.push(toys[0], toys[1], toys[2])
    }

  return (
    <>
      <div className={cl.title}>Встречайте новую ювелирную коллекцию<br/><br/>Новогоднее настроение - елочные игрушки ручной работы!</div>

      <div className={cl.TovarsContainer}>
        {tovars.map((tovar, index) => <Tovar array={tovar} key={tovar.src} index={index}/>)}
      </div>

      <div className={cl.description}>
          Цветовым многообразием украшения обязаны своим инновационным покрытиям - полимерной керамике и современным светополимерным материалам.
          Эти современные материалы не только по-новогоднему яркие, но и исключительно прочные, поэтому не придется переживать за украшения так,
          как в канун праздника переживают за сохранность любимых елочных игрушек.
          На одной цепочке могут отлично смотреться сразу несколько красочных шариков-кулонов в сочетании с серьгами на изящных французских застежках,
          а серьги-трансформеры позволяют менять игрушки и носить их в любом сочетании между собой, в том числе и в виде подвески.
      </div>

      <div className={cl.notion}>
        Серьги можно приобрести как в паре, так и по одной.<br/> Шарики-подвески также можно приобрести по одному.
      </div>
    
      <hr/>

      <div className={cl.variantsTitle}>
          Варианты игрушек:
      </div>
        {show
        ? <TransitionGroup className={cl.variantsContainer}>
            {toys.map((toy, index) => <CSSTransition key={toy.title} timeout={500} classNames='toy'>
                                <Variant obj={toy} key={toy.title} array={toys} index={index}/>
                             </CSSTransition>)}
          </TransitionGroup>
        : <TransitionGroup className={cl.variantsContainer}>
            {notLoadedToys.map((toy, index) => <CSSTransition key={toy.title} timeout={500} classNames='toy'>
                                        <Variant obj={toy} key={toy.title} array={notLoadedToys} index={index}/>
                                      </CSSTransition>)}
          </TransitionGroup>
        }

        <div className={cl.showButton} onClick={() => setShow(!show)}>{show ? "Свернуть" : "Показать еще"}</div>
    </>
  )
}