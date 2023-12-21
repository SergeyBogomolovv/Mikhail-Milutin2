import React, { FC, useState } from 'react'
import cl from './featured.module.scss'
import Tovar from '../newYear/tovar'
const Featured: FC = () => {
    const featuredArray = [
        {id: 1, title: 'Название', image: './images/1.jpg', filled: false},
        {id: 2, title: 'Название пример', image: './images/2.jpg', filled: false},
        {id: 3, title: 'Название', image: './images/3.jpg', filled: false},
        {id: 4, title: 'Название пример', image: './images/4.jpg', filled: false},
    ]
    
    return (
        <div>
            <h1 className={cl.mainTitle}>Избранное:</h1>
            <div className={cl.container}>
                {featuredArray.map((item, index) => <div className={cl.itemContainer} key={item.id}>
                                                <img src={item.image} alt="" />
                                                <div className={cl.titleContainer}>
                                                    <div className={cl.title}>{item.title}</div>
                                                    <svg onClick={() => item.filled = !item.filled} className={cl.img} width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d='M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z' stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={item.filled ? '#000' : '#fff'}></path></svg>
                                                </div>
                                            </div>)}
            </div>
        </div>
  )
}

export default Featured
