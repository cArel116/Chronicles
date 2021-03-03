import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EntryContext = createContext()

// This component establishes what data can be used.
export const JournalEntryProvider = (props) => {
    const [entries, setEntries] = useState([])

    const getEntries = () => {
        return fetch("http://localhost:8088/entries")
            .then(res => res.json())
            .then(setEntries)
    }

    const addEntry = entry => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
            .then(getEntries)
    }

    /*
        Return a context provider which has the
        `entries` state, `getEntries` function,
        and the `addEntry` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EntryContext.Provider value={{
            entries, getEntries, addEntry
        }}>
            {props.children}
        </EntryContext.Provider>
    )
}