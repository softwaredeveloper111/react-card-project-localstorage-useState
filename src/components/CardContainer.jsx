import React, { useState } from 'react'
import Card from './Card'
import Nav from './Nav'
import Container from './Container'

const CardContainer = ({allUserList,setAllUsersList,setShowPageState, getOpenUserID}) => {

  const [val,setVal] = useState("")
  const filteredProducts = allUserList.filter(item=>item.username.toLowerCase().includes(val))
  
  
  return (
    <div className='card-container w-full '>
        <Nav   val={val} setVal={setVal}  setShowPageState={setShowPageState}/>
       <Container  setAllUsersList={setAllUsersList}  filteredProducts={filteredProducts}  getOpenUserID={ getOpenUserID}/>
    </div>
  )
}

export default CardContainer