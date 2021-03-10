import React, { useContext, useEffect, useState } from "react"
import { EntryContext } from "./JournalEntryProvider"
import { Link, useHistory, useParams } from 'react-router-dom';
import "./Journal.css"

export const JournalEntryForm = () => {
    const { addEntry, getEntryById, editEntry } = useContext(EntryContext)

    const [entry, setEntry] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const { entryId } = useParams();
    const history = useHistory();

    //Controlled component
    const handleControlledInputChange = (e) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEntry = { ...entry }
        /* Entry is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEntry[e.target.id] = e.target.value
        // update state
        setEntry(newEntry)
    }

    // const handleClickSaveEntry = (e) => {
    //     e.preventDefault() //Prevents the browser from submitting the form


    //     //Invoke addEntry passing the new entry object as an argument
    //     //Once complete, change the url and display the entry list

    //     const newEntry = {
    //         title: entry.title,
    //         text: entry.text
    //     }
    //     addEntry(newEntry)
    //         .then(() => history.push("/entries"))

    // }

    const handleSaveEntry = () => {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (entryId) {
            //PUT - update
            editEntry({
                id: entry.id,
                title: entry.title,
                text: entry.text
            })
                .then(() => history.push(`/entries/detail/${entry.id}`))
        } else {
            //POST - add
            addEntry({
                title: entry.title,
                text: entry.text
            })
                .then(() => history.push("/entries"))
        }
    }

    //   If entryId is in the URL, getEntryById
    useEffect(() => {

        if (entryId) {
            getEntryById(entryId)
                .then(entry => {
                    setEntry(entry)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <form className="journalEntryForm">

            <fieldset>
                <div className="form-group">
                    <input type="text" id="title" required autoFocus className="form-control journal-entry-title-field" placeholder="Entry Title" value={entry.title} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <textarea type="text" id="text" required className="form-control journal-entry-text-field" placeholder="Once upon a time..." value={entry.text} onChange={handleControlledInputChange}></textarea>
                </div>
            </fieldset>
            <div className="save-close-button-div">
                <button className="btn btn-primary journal-entry-save"
                    disabled={isLoading}
                    onClick={e => {
                        e.preventDefault()
                        handleSaveEntry()
                    }}>Save
                </button>
                <Link className="journal-entry-close-button" to="/entries">
                    Close
                </Link>
            </div>
        </form>
    )
}