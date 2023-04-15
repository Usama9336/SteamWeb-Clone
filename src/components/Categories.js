import React from 'react'

export const Categories=()=> {
  return (
    <div className=' bg-[rgba(58,99,144)] mx-[2.5rem] px-1 mt-8  
flex flex-col md:flex-row items-center justify-between rounded-[3px]'>
        <ul className='text-[white] items-center md:flex px-3 py-1 text-[14px] gap-8'>
            <li>
                <p>Your Store</p>
            </li>
            <li>
                <p>New & Noteworthy</p>
            </li>
            <li>
                <p>Categories</p>
            </li>
            <li>
                <p>Points Shop</p>
            </li>
            <li>
                <p>News</p>
            </li>
            <li>
                <p>Labs</p>
            </li>
        </ul>
        <input className='bg-[rgba(38,60,154)] pl-2 pr-[2px] rounded-[3px]' type="search"  placeholder="Search" />
    </div>
  )
}
