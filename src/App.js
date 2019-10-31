import React, { Component } from 'react'
import { TodoHeader, TodoInput, TodoList } from './components'
import { getTodos } from './services';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    name: 'alex'
                },
                {
                    id: 2,
                    name: 'bob'
                }
            ]
        }
    }

    addTodo = (name) => {
        this.setState({
            todos: this.state.todos.concat({
                id: Math.random(),
                name
            })
        })
    }

    componentDidMount() {
        getTodos().then().catch().finally(()=>{console.log(123123)})
    }

    render() {
        return (
            <div>
                <TodoHeader />
                <TodoInput
                    addTodo={this.addTodo}
                />
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        )
    }
}
