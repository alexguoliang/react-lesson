import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

const noop = () => { };



export default class TodoInput extends Component {

    static propTypes = {
        addTodo: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
        this.inputDom = createRef()
    }

    changeInput = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    handleAddNameClick = () => {
        const { inputValue } = this.state;
        this.addTodo(inputValue)
    }

    handleAddNamekeyup = (e) => {
        const { inputValue } = this.state;
        if (e.keyCode === 13) {
            this.addTodo(inputValue)
        }
    }

    addTodo = (inputValue) => {
        if (inputValue === '') return;
        const { addTodo = noop } = this.props;
        addTodo(inputValue);
        this.setState({
            inputValue: ''
        }, () => {
            this.inputDom.current.focus()
        })
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.inputValue}
                    onChange={this.changeInput}
                    ref={this.inputDom}
                    onKeyUp={this.handleAddNamekeyup}
                />
                <button onClick={this.handleAddNameClick}>todo</button>
            </div>
        )
    }
}
