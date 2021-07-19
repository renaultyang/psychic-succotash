import { List, InputItem, Toast , Button} from 'antd-mobile';
import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
const TelVerify = () => {
  const [hasError, setHasError] = useState(false);
  const [value, setValue] = useState('');
  const onErrorClick = () => {
    if (hasError) {
      Toast.info('Please enter 11 digits');
    }
  };
  const onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    setValue(value);
  };
  const intl = useIntl()
  return (
    <>
      <List
        renderHeader={() => (
          <FormattedMessage id="telephone_number"></FormattedMessage>
        )}
      >
        <InputItem
          type="phone"
          placeholder={ intl.formatMessage({ id: 'input_your_telephone_number' }) } 
          error={hasError}
          onErrorClick={onErrorClick}
          onChange={onChange}
          value={value}
        ></InputItem>
      </List>
      <List
        renderHeader={() => (
          <FormattedMessage id="message_authentication_code"></FormattedMessage>
        )}
      >
        <InputItem
          type="phone"
          placeholder={ intl.formatMessage({ id: 'input_verify_code' }) } 
          error={hasError}
          onErrorClick={onErrorClick}
          onChange={onChange}
          value={value}
          extra={<span style={{ cursor:'pointer' }}>
          <FormattedMessage id="fetch_verify_code"></FormattedMessage>
          </span> }
        ></InputItem>
      </List>
      <Button  style={{ backgroundColor:'#ff734c' , color: 'white',margin: '30px 10px', border:0,  borderRadius:'30px'}}>
      <FormattedMessage id="login_or_regist"></FormattedMessage>
      </Button>
    </>
  );
};

export default TelVerify;
