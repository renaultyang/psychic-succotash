import React, {useState} from 'react';
import { NavBar, Icon  } from 'antd-mobile';
import Logo from '../../asset/img/wx_login_logo.144b5592.png';
import '../../App.less'
import './index.less'
import { useIntl,FormattedMessage } from 'react-intl';
import PassVerif from './PassVerify'; //密码验证组件
import TelVerify from './TelVerify'; //密码验证组件
import login from '../../language/zh-CN/login';

const Login = () => {
  const [ loginWay, setLoginWay ] = useState(true)
  return <>
     <NavBar
      mode="light"
      icon={<Icon type="left" size="lg" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={
        <Icon key="1" type="ellipsis" />
      }
    >
      <FormattedMessage id="login_regist"></FormattedMessage>
      </NavBar>
    
    <div className='page_login_logoParent'>
      <img className='page_login_logo' src={Logo}></img>
    </div>
    {
      loginWay ?  <PassVerif></PassVerif> : <TelVerify></TelVerify>
    }
     
    <div className='toggleLoginWay' onClick={() => setLoginWay(!loginWay)}>
    {
      loginWay ?  <FormattedMessage id="login_in_by_short_message"></FormattedMessage> : <FormattedMessage id="login_in_by_account_and_password"></FormattedMessage>
    }
    </div>
  </>;
};

export default Login;
