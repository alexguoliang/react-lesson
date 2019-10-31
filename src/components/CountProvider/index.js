import React, { Component, createContext } from 'react';

const { Provider, Consumer: CountConsumer } = createContext();

class CountProvider extends Component {

    state = {
        count: 2
    }

    render() {
        return (
            <Provider value={{
                count: this.state.count
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    CountConsumer,
    CountProvider
}