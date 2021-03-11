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
        <section className="journal-entry-wrapper">
            <div className="search-add-entry-div">
                <ul className="search-add-entry-ul">
                    {/* <input type="text"
                    className="input--wide"
                    onKeyUp={(e) => setSearchTerms(e.target.value)}
                    placeholder="Search Entries..." /> */}

                    <li className="fa-icon-li">
                        <button className="newEntry-tooltip" onClick={() => { history.push("/entries/create") }}>
                            <i class="fas fa-plus-square">
                                <span className="tooltiptext">Add Entry</span>
                            </i>
                        </button>
                    </li>
                    <li className="fa-icon-li">
                        <button className="entry-search" onClick={() => { history.push("/entries/create") }}>
                            <i class="fas fa-search"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="entries">
                {
                    filteredEntries.map(entry => {
                        return <JournalEntry key={entry.id} entry={entry} />
                    })
                }
            </div>
        </section>
    )
}