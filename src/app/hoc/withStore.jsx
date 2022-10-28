import React from "react";
import { Provider } from "react-redux";
import createStore from "../../store/store";

const store = createStore();

const withStore = Component => props => {
    return (
        <Provider store={store}>
            <Component {...props}/>
        </Provider>
    );
};

export default withStore;
