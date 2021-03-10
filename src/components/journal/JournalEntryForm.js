import React, { useContext, useEffect, useState } from "react"
import { EntryContext } from "./JournalEntryProvider"
import { useHistory } from 'react-router-dom';
import "./Journal.css"

export const JournalEntryForm = () => {
    const { addEntry } = useContext(EntryContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  
    Define the intial state of the form inputs with useState()
    */

    const [entry, setEntry] = useState({
        title: "",
        text: ""
    });

    const history = useHistory();

    //when a field changes, update state. The return will re-render and display based on the values in state
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

    const handleClickSaveEntry = (e) => {
        e.preventDefault() //Prevents the browser from submitting the form


        //Invoke addEntry passing the new entry object as an argument
        //Once complete, change the url and display the entry list

        const newEntry = {
            title: entry.title,
            text: entry.text
        }
        addEntry(newEntry)
            .then(() => history.push("/entries"))

    }

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
            <button className="btn btn-primary journal-entry-save" onClick={handleClickSaveEntry}>
                Save
          </button>
        </form>
    )
}