import React, {useEffect, useState} from "react";
import AppRouter from "./Router";
import {authService,onAuthStateChanged1} from "fbase";

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        onAuthStateChanged1(authService,(user) => {
            if (user) {
                setIsLoggedIn(true);
                setUserObj(user);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, []);

    return (
        <>
            {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "Initializing..."}
            <footer>&copy; {new Date().getFullYear()}
                Nwitter
            </footer>
        </>
    );
}

export default App;
