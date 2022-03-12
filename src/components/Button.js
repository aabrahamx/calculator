import React from 'react'
import './Button.css'

export class Button extends React.Component {
    render() {
        return(
            <div>
                <input
                onClick={() => {
                    this.props.onClick(this.props.btnValue)
                }}
                type="button"
                value={this.props.btnValue}
                className='input'
                />
            </div>
        )
    }
}