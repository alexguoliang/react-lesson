import React, { Component } from 'react'
import { CountConsumer } from '../CountProvider'

export default class Count extends Component {
    render() {
        return (
            <CountConsumer>
                {
                    ({ count }) => {

                        return <div>{count}</div>
                    }
                }
            </CountConsumer>
        )
    }
}
