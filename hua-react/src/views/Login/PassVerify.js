import { List, InputItem, Toast, Button } from 'antd-mobile';
import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { login } from '../../utils/http/user'
import store from 'storejs';
const LoginForm = (prop) => {
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('password');

  const intl = useIntl(); // 对于占位符 placeholder 和 title 不支持使用 FormattedMessage组件
  // console.log(intl);
  const onErrorClick = () => {
    if (hasError) {
      Toast.info('Please enter 11 digits');
    }
  };
   // 组件封装的参数并非原生参数
  const onChange = (user) => {
    if (user.replace(/\s/g, '').length < 11) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    setUser(user);
  };
  // 组件封装的参数并非原生参数
  const inputPassword = (password) => {
    setPassword(password.trim());
  };
  console.log(login)

  const logIn = () => {
    console.log({ user, password })
    login({ user, password }).then((res) => {
      console.log('res', res)
      console.log('store', store)
    
        store.set('token', res.data.token)
      
    })
  };
  return (
    <>
      <List
        renderHeader={() => (
          <FormattedMessage id="telephone_or_email"></FormattedMessage>
        )}
      >
        <InputItem
          placeholder={intl.formatMessage({ id: 'input_telephone_or_email' })}
          error={hasError}
          clear
          onErrorClick={onErrorClick}
          onChange={onChange}
          value={user}
        ></InputItem>
      </List>
      <List
        renderHeader={() => <FormattedMessage id="password"></FormattedMessage>}
      >
        <InputItem
          placeholder={intl.formatMessage({ id: 'input_password' })}
          type={showPassword}
          clear
          value={password}
          onChange={inputPassword}
          extra={
            <>
              {showPassword === 'password' ? (
                <span onClick={() => setShowPassword('text')}>
                  <svg
                    className="icon"
                    style={{
                      width: '1em',
                      height: '1em',
                      verticalAlign: 'middle',
                      fill: 'currentColor',
                      overflow: 'hidden',
                      marginRight: '20px',
                    }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3986"
                  >
                    <path
                      d="M512 637.207273c-171.752727 0-343.272727-52.363636-465.454545-156.858182a34.909091 34.909091 0 1 1 46.545454-53.061818c215.505455 186.181818 623.243636 186.181818 837.818182 0a34.909091 34.909091 0 0 1 46.545454 53.061818c-122.181818 104.494545-293.701818 156.858182-465.454545 156.858182zM384.465455 791.272727a28.625455 28.625455 0 0 1-6.283637 0A34.676364 34.676364 0 0 1 349.090909 749.149091l23.272727-137.309091a34.909091 34.909091 0 1 1 69.818182 12.101818l-23.272727 137.309091A34.909091 34.909091 0 0 1 384.465455 791.272727zM907.636364 721.454545a34.443636 34.443636 0 0 1-24.669091-10.472727l-114.734546-116.363636a34.909091 34.909091 0 1 1 49.570909-48.872727l114.734546 116.363636a34.909091 34.909091 0 0 1 0 49.338182A36.305455 36.305455 0 0 1 907.636364 721.454545zM116.363636 721.454545a36.305455 36.305455 0 0 1-23.272727-10.007272 34.909091 34.909091 0 0 1 0-49.338182l114.734546-116.363636a34.909091 34.909091 0 1 1 48.174545 48.872727l-114.734545 116.363636A34.443636 34.443636 0 0 1 116.363636 721.454545zM641.163636 791.272727a34.909091 34.909091 0 0 1-34.210909-28.858182l-23.272727-137.30909a34.909091 34.909091 0 1 1 67.956364-13.265455l23.272727 137.309091a34.676364 34.676364 0 0 1-28.16 40.494545 28.625455 28.625455 0 0 1-5.585455 1.629091z"
                      p-id="3987"
                    ></path>
                  </svg>
                </span>
              ) : (
                <span onClick={() => setShowPassword('password')}>
                  <svg
                    className="icon"
                    style={{
                      width: '1em',
                      height: '1em',
                      verticalAlign: 'middle',
                      fill: 'currentColor',
                      overflow: 'hidden',
                      marginRight: '20px',
                    }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="923"
                  >
                    <path
                      d="M936.533333 505.6c0-2.56-89.6-256-424.533333-256S88.32 503.04 87.466667 505.6L85.333333 512l2.133334 6.4c0 2.56 89.6 257.066667 424.533333 257.066667s423.68-254.506667 424.533333-256L938.666667 512zM512 734.933333C232.533333 734.933333 143.786667 550.186667 128 512c15.36-36.906667 106.666667-222.933333 384-222.933333 279.253333 0 368.213333 184.746667 384 222.933333-15.786667 36.906667-106.666667 222.933333-384 222.933333z"
                      p-id="924"
                    ></path>
                    <path
                      d="M512 362.666667a149.333333 149.333333 0 1 0 149.333333 149.333333 149.333333 149.333333 0 0 0-149.333333-149.333333z m0 256a106.666667 106.666667 0 1 1 106.666667-106.666667 106.666667 106.666667 0 0 1-106.666667 106.666667z"
                      p-id="925"
                    ></path>
                  </svg>
                </span>
              )}
              <span style={{ cursor:'pointer' }}>
                <FormattedMessage id="forget_password"></FormattedMessage>
              </span>
            </>
          }
        ></InputItem>
      </List>
      <Button onClick={()=>logIn()} style={{ backgroundColor:'#ff734c' , color: 'white',margin: '30px 10px', border:0,  borderRadius:'30px'}}>
      <FormattedMessage id="login_in"></FormattedMessage>
      </Button>
    </>
  );
};

export default LoginForm;
