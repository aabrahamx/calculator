import React from 'react'
import './Display.css'

export class Display extends React.Component {
    render() {
        return (
            <div className={ this.props.className }>
                <span>{ this.props.number }</span>
            </div>
        )
    }
}