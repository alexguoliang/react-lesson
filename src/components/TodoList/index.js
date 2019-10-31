import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class TodoList extends Component {

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })).isRequired
    }

    render() {
        const { todos } = this.props;
        return (
            <div>
                {todos.map(todo => {
                    return <TodoItem {...todo} key={todo.id} />
                })}
            </div>
        )
    }
}
