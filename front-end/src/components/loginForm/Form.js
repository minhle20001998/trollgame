import React from 'react'
import ReactDOM from 'react-dom'
import Input from "../Input"
import Button from "../Button"
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'
const fetch = require('../../scripts/fetch');
class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errMessage: null,
            redirect: false,
            toPage: ""
        }
    }

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    handleLoginSubmit = async () => {
        const url = "http://localhost:3000/login";
        const username_input = document.querySelector(".username_input");
        const password_input = document.querySelector(".password_input");
        const body = {
            username: username_input.value,
            password: password_input.value
        }
        const result = await fetch(url, body);
        if (result.login == "false") {
            this.setState({
                errMessage: "sai r "
            })
        } else {
            this.setState({
                redirect: true,
                toPage: "/"
            })
        }

    }

    handleRegisterSubmit = async () => {
        const url = "http://localhost:3000/register";
        const username_input = document.querySelector(".username_input");
        const password_input = document.querySelector(".password_input");
        const body = {
            username: username_input.value,
            password: password_input.value
        }
        const result = await fetch(url, body);
        if (result.register == "false") {
            this.setState({
                errMessage: "lol noob"
            })
        } else {
            this.setState({
                redirect: true,
                toPage: "/login"
            })
        }
    }



    render() {
        console.log(this.props);
        let button;
        let title;
        if (this.props.purpose == "login") {
            title = <h1>LOGIN</h1>
            button = <Button onClick={() => this.handleLoginSubmit()}></Button>
        } else if (this.props.purpose == "register") {
            title = <h1>REGISTER</h1>
            button = <Button onClick={() => this.handleRegisterSubmit()}></Button>
        }
        if (this.state.redirect == true) {
            return <Redirect push to={this.state.toPage} />
        }
        return (
            <>

                {title}
                <p style={{ color: "red" }}>
                    {(this.state.errMessage) ? this.state.errMessage : ""}
                </p>
                <Input className="username_input" type="text" placeholder="Ten dang nhap"></Input>
                <Input className="password_input" type="password" placeholder="Mat khau"></Input>
                {button}
            </>);
    }
}
export default Form;