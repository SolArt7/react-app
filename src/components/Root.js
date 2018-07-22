import React from 'react';
import App from '../App';
import store from '../store';
import {Provider} from 'react-redux';

const Root = (props) => {
    return (
        <Provider store={store}>
            <App {...props}/>
        </Provider>
    );
};

export default Root;