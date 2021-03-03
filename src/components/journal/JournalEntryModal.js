import React from 'react';
import "./Journal.css"

export const JournalModal = ({ toggleModal, closeModal }) => {
    return (
        <div id="modal" className="modalWrapper" onClick={closeModal}>
            <section className="journalOpen">
                <div className="journal-page-left">
                    <div className="journal-page-footer-left">
                        <button className="journal-button">Options</button>
                        <p className="journal-page-number">1</p>
                        <button className="journal-button">Prev</button>
                    </div>
                </div>
                <div className="journal-page-right">
                    <div className="journal-page-footer-right">
                        <button className="journal-button">Next</button>
                        <p className="journal-page-number">2</p>
                        <button className="journal-button" onClick={toggleModal}>Close</button>
                    </div>
                </div>

            </section>
        </div>
    )
}