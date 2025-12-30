import React from 'react'

const Nav = ({setShowPageState,val,setVal}) => {

  

  function clickEventHandler(){
     setShowPageState("HomePage")
  }

  function clickInputEvent(e){
    setVal(e.target.value)
  }

  return (
    <div className='w-full flex justify-center gap-10 text-white'>
       <button onClick={clickEventHandler} className='px-3 py-2 bg-sky-400 rounded-md cursor-pointer'>Home</button>
       <input value={val}  onChange={clickInputEvent} type="search" placeholder='Search among 100+ Users' className='px-3 py-3 rounded-md border border-zinc-200 outline-none w-100'/>
    </div>
  )
}

export default Nav