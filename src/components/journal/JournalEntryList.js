import React, { useContext, useEffect } from "react"
import { EntryContext } from "./JournalEntryProvider"
import { JournalEntry } from "./JournalEntry"
import "./Journal.css"

export const JournalEntryList = () => {
    // This state changes when `getEntries()` is invoked below
    const { entries, getEntries } = useContext(EntryContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("JournalEntryList: useEffect - getEntries")
        getEntries()

    }, [])


    return (
        <div className="entries">
            {console.log("JournalEntryList: Render", entries)}
            {
                entries.map(entry => {
                    return <JournalEntry key={entry.id} entry={entry} />
                })
            }
        </div>
    )
}