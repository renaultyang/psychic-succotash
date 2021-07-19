import React, { useState} from 'react';
import './App.less'; //公共样式
import Login from './views/Login';
import { IntlProvider, FormattedMessage } from 'react-intl'; /* react-intl imports */
import en_US from '../src/language/en-US';
import zh_CN from '../src/language/zh-CN';

const App = () => {
  const messages = {};
  messages['en'] = en_US;
  messages['zh'] = zh_CN;
  const [lang, setLang] = useState('zh');

  return <IntlProvider locale={lang} messages={messages[lang]}>
    {
      /* 
        切换中英文的开关在这里 只需要改变这个lang的值即可
      */
    }
    {/* <button onClick={() => { setLang('zh')} }>切换英文中文</button> */}
    <Login></Login>
  </IntlProvider>;
};

export default App;
