import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoHeader extends Component {

    static propTypes = {
        title: PropTypes.string,
    }

    static defaultProps = {
        title: '练习'
    }


    render() {
        const { title } = this.props
        return (
            <div>
                {title}
            </div>
        )
    }
}

