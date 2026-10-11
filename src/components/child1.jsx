import React from 'react'
import { useUserContext } from '../context/UserContext'

const Child1 = () => {
  const { userInfo } = useUserContext()
  
  console.log(userInfo)
  
  return (
    <div>
      This is Child1 and user name is {userInfo.name} and user id is {""}
    {userInfo.userId}
    </div>
  );
};

export default Child1;