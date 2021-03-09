import React, { useContext, useEffect } from "react"
import { EntryContext } from "./JournalEntryProvider"
import { JournalEntry } from "./JournalEntry"
import { useHistory } from "react-router-dom"
import "./Journal.css"

export const JournalEntryList = () => {
    // This state changes when `getEntries()` is invoked below
    const { entries, getEntries } = useContext(EntryContext)

    const history = useHistory()

    // Initialization effect hook -> Go get entry data
    useEffect(() => {
        getEntries()
    }, [])


    return (
        <>

            <button className="newEntry-tooltip" onClick={() => { history.push("/entries/create") }}>
                <i class="fas fa-plus-square">
                    <span className="tooltiptext">Add Entry</span>
                </i>
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