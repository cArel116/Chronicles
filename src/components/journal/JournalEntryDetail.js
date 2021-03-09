import React, { useContext, useEffect, useState } from "react"
import { EntryContext } from "./JournalEntryProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Journal.css"

export const JournalEntryDetail = () => {
    const { getEntryById, deleteEntry } = useContext(EntryContext)

    const [entry, setEntry] = useState({})

    const { entryId } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        deleteEntry(entry.id)
            .then(() => {
                history.push("/entries")
            })
    }

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
            <div className="edit-delete-journal-entry">
                <button className="journal-entry-delete-button" onClick={handleDelete}>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </section>
    )
}