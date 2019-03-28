import React, { Component } from 'react';
import TextZone from './TextZone'

class SubTitle extends Component {
    render() {
        const _titleTextColor = this.props.titleTextColor ? this.props.titleTextColor : null
        const _texto = this.props.texto ? this.props.texto : null
        const _size = this.props.size ? this.props.size : null
        const className = this.props.className ? this.props.className : ''

        const _className = 'title ' + className
        return (
            <div className={_className}>
                <TextZone texto={_texto} color={_titleTextColor} size={_size}></TextZone>
            </div>
        );
    }
}

export default SubTitle; 