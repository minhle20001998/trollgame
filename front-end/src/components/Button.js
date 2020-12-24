import React from 'react'
import Input from "./Input"

class Button extends React.Component {
    render() {
        return (<button onClick={() => this.props.onClick()}>
            Submit
        </button>);
    }
}
export default Button;