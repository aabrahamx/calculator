import React from 'react'
import './Button.css'

export class Button extends React.Component {
    render() {
        const btnValue = this.props.btnValue
        return(
            <div>
                <input
                onClick={() => {
                    this.props.onClick(btnValue)
                }}
                type="button"
                value={btnValue}
                className={`input btn${btnValue}`}
                />
            </div>
        )
    }
}