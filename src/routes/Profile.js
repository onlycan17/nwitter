import React from "react";
import {useHistory} from "react-router-dom";
import {authService, signOutEx} from "../fbase";

export default () => {
    const history = useHistory();
    const onLogOutClick = () => {
        signOutEx(authService);
        history.push("/");
    };
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}