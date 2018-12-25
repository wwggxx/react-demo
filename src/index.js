import React from 'C:/Users/admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import ReactDOM from 'C:/Users/admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom';
import '@/static/styles/common/index.scss';
import App from '@/components/Login';
import * as serviceWorker from '@/utils/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
