import React, { Component } from 'react';
import { Root } from "native-base";
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import Router from './router';


const store = configureStore();

class RootComponent extends Component {

    render () {
        return (
            <Root>
                <Provider store={store}>
                    <Router />
                </Provider>
            </Root>
        )
    }
}

export default RootComponent;
