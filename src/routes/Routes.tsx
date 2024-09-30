import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {LoginPage} from "../components/ui/Login";

const Routes_ = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
    )
}


function Login() {
    return <div>Login</div>
}

export {Routes_};