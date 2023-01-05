import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>} />
                <Route exact path="/" element={<HomePage/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;