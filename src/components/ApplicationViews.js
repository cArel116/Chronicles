import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { Journal } from "./journal/JournalMain"
import { JournalEntryForm } from "./journal/JournalEntryForm"
import { JournalEntryList } from "./journal/JournalEntryList"
import { JournalEntryProvider } from "./journal/JournalEntryProvider"
import { JournalEntryDetail } from "./journal/JournalEntryDetail"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the home page when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the journal page when http://localhost:3000/journal */}
            <Route exact path="/journal">
                <Journal />
            </Route>

            {/* Render the entry list when http://localhost:3000/entries */}
            <JournalEntryProvider>
                <Route exact path="/entries">
                    <JournalEntryList />
                </Route>
                <Route exact path="/entries/create">
                    <JournalEntryForm />
                </Route>
                <Route exact path="/entries/detail/:entryId(\d+)">
                    <JournalEntryDetail />
                </Route>
                <Route exact path="/entries/edit/:entryId(\d+)">
                    <JournalEntryForm />
                </Route>
            </JournalEntryProvider>
        </>
    )
}