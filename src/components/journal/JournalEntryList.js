import React, { useContext, useEffect } from "react"
import { EntryContext } from "./JournalEntryProvider"
import { JournalEntry } from "./JournalEntry"
import "./Journal.css"
import { useHistory } from "react-router-dom"

export const JournalEntryList = () => {
    // This state changes when `getEntries()` is invoked below
    const { entries, getEntries } = useContext(EntryContext)

    const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("JournalEntryList: useEffect - getEntries")
        getEntries()

    }, [])


    return (
        <>

            <button className="newEntry" onClick={() => { history.push("/entries/create") }}>
                <i class="fas fa-plus-square"></i>
            </button>

            <div className="entries">
                {console.log("JournalEntryList: Render", entries)}
                {
                    entries.map(entry => {
                        return <JournalEntry key={entry.id} entry={entry} />
                    })
                }
            </div>
        </>
    )
}