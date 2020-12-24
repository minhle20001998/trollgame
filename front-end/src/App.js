import React from 'react'
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Form from "./components/loginForm/Form";
import checkSession from "./scripts/checkSession";
const App = () => {

    /*check cookie if login*/
    const isLoggedin = (nextState, replace) => {
        if (checkSession("login")) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <Router>
            <>
                <NavBar isLoggedin={isLoggedin} />
                <Route exact path="/login" render={
                    login => <Form purpose="login" />}
                />
                <Route exact path="/register" render={
                    register => <Form purpose="register" />}
                />
                <Route exact path="/" render={
                    homepage => (isLoggedin() ? (
                        <h1>Logged in</h1>
                    ) : (
                            <Redirect to="/login" />
                        )
                    )}
                />


                <Footer />
            </>
        </Router>
    )
}

export default App;