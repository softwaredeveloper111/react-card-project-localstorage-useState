import React, { useState } from 'react'

const Form = ({getUserData,setShowPageState}) => {
 

  const [userData,setUserData] =  useState({username:"",profession:"",description:"",imageUrl:"",id:""})
 
  function clickEventHandler(){
    setShowPageState("userListPage")
  }



   function changeInputHandler(e){
     if(e.target.id==="username"){
        setUserData((prev)=>({...prev,username:e.target.value}))
     }

     if(e.target.id==="profession"){
      setUserData((prev)=>({...prev,profession:e.target.value}))
     }

     if(e.target.id === "description"){
      setUserData((prev)=>({...prev,description:e.target.value}));
     }

     if(e.target.id === "imageUrl"){
      setUserData((prev)=>({...prev,imageUrl:e.target.value}))
     }

     if(e.target.id==="file"){
  
      if(e.target.files[0]){
        let url = URL.createObjectURL(e.target.files[0])
        setUserData((prev)=>({...prev,imageUrl:url}))

      }
       
     }

   } 

   
  function formSubmitHandler(e){
     e.preventDefault()
      getUserData({...userData,id:crypto.randomUUID()})
     setUserData({username:"",profession:"",description:"",imageUrl:"",id:""})
     setShowPageState("userListPage")
  }

  


  return (
    <div className=' w-full flex flex-col justify-center items-center  text-white'>
      
       <form className='flex flex-col gap-5' onSubmit={formSubmitHandler}>
        <input onChange={changeInputHandler} value={userData.username} id='username' required className='px-3 py-3 w-[320px] rounded-md border border-zinc-100 text-white' type="text" placeholder='Names goes here.' />

        <input onChange={changeInputHandler} value={userData.profession}  id='profession' required className='px-3 py-3 w-[320px] rounded-md border border-zinc-100 text-white' type="text" placeholder='profession goes here' />

        <input onChange={changeInputHandler} value={userData.description} id='description' required className='px-3 py-3 w-[320px] rounded-md border border-zinc-100 text-white' type="text" placeholder='description goes here' />

        <input onChange={changeInputHandler} value={userData.imageUrl}  id='imageUrl'   className='px-3 py-3 w-[320px] rounded-md border border-zinc-100 text-white' type="text"  placeholder='Paster your image Url'/>
        <span>Or</span>

        <label  htmlFor="file" className='bg-zinc-700 rounded-md px-3 py-2 cursor-pointer'>Choose Your image from local stroage</label>
         <input onChange={changeInputHandler} type='file' id='file' accept='image/*' hidden/>

         <button value={userData.imageUrl} className='px3 py-2 bg-sky-400 rounded-md text-lg font-medium cursor-pointer'>create user</button>
       </form>
       
       <button onClick={clickEventHandler} className='bg-pink-400 px-3 py-3 rounded-md mt-50 cursor-pointer'>Show All users list</button>

    </div> 
  )
}

export default Form