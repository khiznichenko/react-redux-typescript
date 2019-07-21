import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app';
import { configureStore } from './app/store/ConfigureStore';

const store = configureStore();

const provider = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
  provider,
  document.getElementById('root'),
);
