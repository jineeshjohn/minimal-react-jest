import React from 'react';
import ReactDOM from 'react-dom';
import Link from './Link.react';

const title = 'My Minimal React Webpack Babel Setup!!! :)';

ReactDOM.render(
  <Link>{title}</Link>,
  document.getElementById('app')
);

module.hot.accept();