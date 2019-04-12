import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

export default (props) => {
  return (
    <Provider store={createStore(reducers, devToolsEnhancer())}>
      {props.children}
    </Provider>
  )
};