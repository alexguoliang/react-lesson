import React, { PureComponent } from 'react'

export default class TodoItem extends PureComponent {
    render() {
        const { name } = this.props;
        console.log(`${name} render`)
        return (
            <div>
                <div>{name}</div>
            </div>
        )
    }
}
