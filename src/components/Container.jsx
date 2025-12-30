import React from 'react'
import Card from './Card'

const Container = ({filteredProducts,setAllUsersList, getOpenUserID}) => {
  return (
    <div className='  w-full flex gap-7 flex-wrap  mt-20 '>


      {filteredProducts.length>0 ? filteredProducts.map(item=>  <Card key={item.id} item={item}  setAllUsersList={setAllUsersList}  getOpenUserID={ getOpenUserID}/>) : <h3 className='text-xl text-red-400'>No user is available</h3>}
      
      
    </div>
  )
}

export default Container