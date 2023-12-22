import React from 'react'
interface HeartProps {
    onClick: any
    className: any
    isFilled: boolean
}
export default function Heart({onClick, isFilled, className} : any) {
  return (
      <svg onClick={onClick} width="32px" className={className} height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d='M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z' stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={isFilled ? '#000' : '#fff'}></path></svg>
  )
}
