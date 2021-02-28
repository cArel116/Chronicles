import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { JournalModalContainer } from "../containers/JournalModalContainer"
import "./Chronicles.css"
import "../assets/css/all.css"

export const Chronicles = () => (
    <>
        <JournalModalContainer />
        <NavBar />
        <ApplicationViews />
    </>
)