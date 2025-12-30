import React from 'react'

const Card = ({item, getOpenUserID,setAllUsersList}) => {
  let {id,username,profession,imageUrl} = item;

  function clickEventHandler(){
    getOpenUserID(id)
    
  }
  

  function removeEventHandler(){
    setAllUsersList((prev=>{
      let updated = prev.filter(item=>item.id!==id)
      localStorage.setItem("userList",JSON.stringify(updated));
      return updated;
    }))

   
  }

  


  return (
    <div  className='card w-[320px] h-75 overflow-hidden rounded-md bg-zinc-500  pt-4 flex flex-col items-center gap-4 text-white text-center cursor-pointer'>
        <img className='h-30 w-30 rounded-full object-cover object-top' src={imageUrl} alt="" />
        <span onClick={clickEventHandler} className='text-medium text-2xl hover:text-zinc-400 active:scale-[1.1]'>{username}</span>
        <span>{profession}</span>
        <button onClick={removeEventHandler} className='px-3 py-2 bg-red-500 rounded-md cursor-pointer'>remove</button>
    </div>
  )
}

export default Card