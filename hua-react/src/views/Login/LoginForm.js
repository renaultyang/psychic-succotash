import { List, InputItem, Toast } from 'antd-mobile';
import React, {useState} from 'react';

const LoginForm = () => {
  const [hasError, setHasError] = useState(false);
  const [value, setValue] = useState('');
  const onErrorClick = () => {
    if (hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  const onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    setValue(value)
  }
  return <>
    <div>
        <List >
          <InputItem
            type="phone"
            placeholder="input your phone"
            error={hasError}
            onErrorClick={onErrorClick}
            onChange={onChange}
            value={value}
          >手机号码</InputItem>
        </List>
      </div>
  </>;
};

export default LoginForm;
