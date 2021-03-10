import React, { useContext, useEffect, useState } from "react"
import { EntryContext } from "./JournalEntryProvider"
import { JournalEntry } from "./JournalEntry"
import { useHistory } from "react-router-dom"
import "./Journal.css"

export const JournalEntryList = () => {
    const { entries, getEntries, searchTerms } = useContext(EntryContext)

    const [filteredEntries, setFiltered] = useState([])
    const { setSearchTerms } = useContext(EntryContext)
    const history = useHistory()

    // Go get entry data
    useEffect(() => {
        getEntries()
    }, [])

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching entries.
            const subset = entries.filter(entry => entry.title.includes(searchTerms) || entry.text.includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all entries.
            setFiltered(entries)
        }
    }, [searchTerms, entries])

    return (
        <>
            <div className="search-add-entry-div">
                <input type="text"
                    className="input--wide"
                    onKeyUp={(e) => setSearchTerms(e.target.value)}
                    placeholder="Search Entries..." />
                <button className="newEntry-tooltip" onClick={() => { history.push("/entries/create") }}>
                    <i class="fas fa-plus-square">
                        <span className="tooltiptext">Add Entry</span>
                    </i>
                </button>
            </div>

            <div className="entries">
                {
                    filteredEntries.map(entry => {
                        return <JournalEntry key={entry.id} entry={entry} />
                    })
                }
            </div>
        </>
    )
}