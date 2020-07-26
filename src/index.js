import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'tachyons';

import CardList from './CardList'
import {robots} from './robots';

ReactDOM.render(
    <div>
      <CardList robots={robots}/>
    </div>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
