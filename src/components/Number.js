import React from 'react'
import './Number.css'

export class Number extends React.Component {
    render() {
        return(
            <div>
                <input
                onClick={() => {
                    this.props.onClick(this.props.number)
                }}
                type="button"
                value={this.props.number}
                className='input'
                />
            </div>
        )
    }
}