import React, { useState } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";

import { AuthContext } from "./contexts/auth";

const AppRoutes = () => {
const [user, setUser] = useState(null);

const login = (email, password) => {};

const logout = () => {};
    return(
        <Router>
            <AuthContext.Provider value={{authenticated: !!user, user, login}}>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<HomePage/>} />
                </Routes>
            </AuthContext.Provider>
        </Router>
    )
}

export default AppRoutes;