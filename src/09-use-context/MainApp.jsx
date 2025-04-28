import {Routes, Route, Navigate} from "react-router";
import {HomePage} from "./HomePage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import {LoginPage} from "./LoginPage.jsx";
import {NavBar} from "./NavBar.jsx";
import {UserProvider} from "./context/UserProvider.jsx";

export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar/>
            <hr/>

            <Routes>
                <Route path="/" element={<HomePage />}  />
                <Route path="login" element={<LoginPage />}  />
                <Route path="about" element={<AboutPage />}  />

                {/*<Route path="/*" element={<LoginPage />}  />*/}

                <Route path="/*" element={<Navigate to="/about" />} />

            </Routes>

        </UserProvider>
    )
}