import React from 'react'

const UserDetails = ({setShowPageState,userId, allUserList}) => {



  function clickEventHandler(){
    setShowPageState("userListPage")
  }

  const filterUser = allUserList.find((item)=>item.id===userId);



  return (
    <div className='user-details w-full  text-white'>
        <button onClick={clickEventHandler} className='px-3 py-2 rounded-md bg-sky-400 cursor-pointer'>Back</button>



        <div className=' flex flex-col justify-center items-center  mt-30 gap-7 text-center'>

        <h1 className='text-6xl font-semibold'>{filterUser.username}</h1>
        <img className='w-[320px] h-100 rounded-md object-cover' src={filterUser.imageUrl} alt="" />
        <span className='text-xl font-medium '>{filterUser.profession}</span>
        <p className='max-w-200'>{filterUser.description}</p>
        </div>
    </div>
  )
}

export default UserDetails