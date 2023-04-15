import React from 'react'
export const Cards = (props) => {
  const {image,title}=props;
  return (
    <div className=''>
       <img src={image} alt="" className='object-cover w-full' />
           <p className='text-sm text-[white]'>{title}</p>
    </div>
  )
}
