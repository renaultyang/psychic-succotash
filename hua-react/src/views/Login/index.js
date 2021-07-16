import React, {useState} from 'react';
import { NavBar, Icon, InputItem  } from 'antd-mobile';
import Logo from '../../asset/img/wx_login_logo.144b5592.png';
import '../../App.less'
import './index.less'
import LoginForm from './LoginForm';
const  Login = () => {
  return <>
     <NavBar
      mode="light"
      icon={<Icon type="left" size="lg" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={
        <Icon key="1" type="ellipsis" />
      }
    >登陆注册</NavBar>
    
    <div className='page_login_logoParent'>
      <img className='page_login_logo' src={Logo}></img>
    </div>
      <LoginForm></LoginForm>
  
  </>;
};

export default Login;
