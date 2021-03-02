import React from "react"
import "./Journal.css"

export const JournalEntry = ({ entry }) => (
    <section className="journal-entry">
        <h3 className="entry-title">{entry.title}</h3>
        <div>
            <p className="entry">{entry.text}</p>
        </div>
    </section >
)