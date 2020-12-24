import React from 'react'
import Button from "../Button"
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'



class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            toPage: ""
        }
    }
    handleLogOutSubmit() {
        document.cookie = 'login=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.setState({
            redirect: true,
            toPage: "/login"
        })
    }
    render() {
        let button;
        console.log('==============',this.props.isLoggedin());
        if (this.props.isLoggedin()) {
            button = <Button onClick={() => this.handleLogOutSubmit()}>Logout</Button>
        }
        if (this.state.redirect == true) {
            return <Redirect push to={this.state.toPage} />
        }
        return <>
            <h1>Nav Bar</h1>
            {button}

        </>;
    }
}
export default NavBar;