import React, { useState } from 'react'
import Form from './components/Form'
import CardContainer from './components/CardContainer'
import UserDetails from './components/UserDetails'


const App = () => {




  const [showCurrentPageState,setShowPageState] = useState("HomePage");

  const [allUserList,setAllUsersList] = useState(JSON.parse(localStorage.getItem("userList")) || [])
  const [userId,setUserId ] = useState(null)

   
  function getUserData(data){

    setAllUsersList(prev=>{
      const updatedList = [...prev,data];
      localStorage.setItem("userList",JSON.stringify(updatedList))
      return updatedList
      
    })
    
    
    
  }

 
  function getOpenUserID(id){
    setUserId(id)
    setShowPageState("userDetailsPage")
  }





  let showPage = <Form/>;
  if(showCurrentPageState ==="HomePage"){
    showPage =  <Form  getUserData={getUserData} setShowPageState={setShowPageState}/>;
  }
  else if(showCurrentPageState ==="userListPage"){
    showPage =   <CardContainer  allUserList={allUserList} setShowPageState={setShowPageState} setAllUsersList={setAllUsersList} getOpenUserID={ getOpenUserID}/>
  }
  else if(showCurrentPageState === "userDetailsPage"){
    showPage = <UserDetails allUserList={allUserList} userId={userId}  setShowPageState={setShowPageState}/>
  }



  return (
    <div className='main w-full min-h-screen bg-zinc-900 pt-7 pb-10 px-10'>
     
      {showPage}
       
    </div>
  )
}

export default App