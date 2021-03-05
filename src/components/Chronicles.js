import React from "react"
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { JournalModalContainer } from "../containers/JournalModalContainer"
import "./Chronicles.css"
import "../assets/css/all.css"

export const Chronicles = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("chronicles_adventurer")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                            <JournalModalContainer />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)