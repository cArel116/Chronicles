import React from "react"
import "./Journal.css"
import { Link } from "react-router-dom"

export const JournalEntry = ({ entry }) => (
    <section className="journal-entry">
        <div className="entry-title">
            <h3 className="entry-title-tooltip">
                <Link className="entry-title-link" to={`/entries/detail/${entry.id}`}>
                    {entry.title}
                    <span className="tooltiptext">Edit</span>
                </Link>
            </h3>
        </div>
        <div>
            <p className="entry">{entry.text}</p>
        </div>
    </section >
)