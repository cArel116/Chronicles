import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { Journal } from "./journal/Journal"
import { JournalEntry } from "./journal/JournalEntry"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the home page when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the journal page when http://localhost:3000/journal */}
            <Route path="/entries">
                <Journal />
            </Route>

            {/* Render the entry list when http://localhost:3000/entries */}
            <Route path="/entries">
                <JournalEntry />
            </Route>
        </>
    )
}