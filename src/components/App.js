import React, {useEffect, useState} from "react";
import AppRouter from "./Router";
import {authService,onAuthStateChanged1} from "fbase";

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        onAuthStateChanged1(authService,(user) => {
            if (user) {
                setUserObj(user);
            }
            setInit(true);
        });
    }, []);

    return (
        <>
            {init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj}/> : "Initializing..."}
            <footer>&copy; {new Date().getFullYear()}
                Nwitter
            </footer>
        </>
    );
}

export default App;
