import React, {useState} from 'react';
function useLogin() {
  const [currentUser, setCurrentUser] = useState({name:'默认'});
  const changeUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem('user',JSON.stringify(user))
  }
  return [currentUser,changeUser]
}



const Example6 = () => {
  const [user, setUser] = useLogin()
  return <>
    <span>当前登陆·······{ user.name }</span>
    <button onClick={() => {setUser({name:'yrl'}) }}>存本地</button>
  </>;
};

export default Example6;



