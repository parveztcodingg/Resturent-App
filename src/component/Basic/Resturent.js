import React, { useState } from 'react'
import './style.css'
import Menu from "./menuApi"
import MenuCard from './MenuCard'

const uniqueList =[
  ...new Set( Menu.map((curElem) => {
      return curElem.category ;

    }))
  ]

console.log(uniqueList);
  


const Resturent = () => {
  const[menuData,setMenuData] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category===category
    })
    setMenuData(updatedList)
  };
  return (
    <>
    <nav
    className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item'
        onClick={() => filterItem("breakfast")}
       > breakfast</button> 
         <button className='btn-group__item' onClick={() => filterItem("lunch")}
         > lunch</button>
           <button className='btn-group__item' 
           onClick={() => filterItem("evening")}
           > evening</button>

           <button className='btn-group__item'onClick={() => filterItem("dinner")} 

           > dinner</button>

  <button className='btn-group__item'
   onClick={() => setMenuData(Menu)}
   > all</button>

      </div>
    </nav>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturent
