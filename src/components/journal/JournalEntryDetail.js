import React, { useContext, useEffect, useState } from "react"
import { EntryContext } from "./JournalEntryProvider"
import "./Journal.css"
import { useParams, useHistory } from "react-router-dom"

export const JournalEntryDetail = () => {
    const { getEntryById } = useContext(EntryContext)

    const [entry, setEntry] = useState({})

    const { entryId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", entryId)
        getEntryById(entryId)
            .then((response) => {
                setEntry(response)
            })
    }, [])

    return (
        <section className="journal-entry">
            <h3 className="entry-title">{entry.title}</h3>
            <div className="entry">{entry.text}</div>
        </section>
    )
}