import React, { useState } from 'react'
import { JournalModal } from '../components/journal/JournalEntryModal';

export const JournalModalContainer = () => {

    const [showModal, setShowModal] = useState(true);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = e => {
        if (e.target.id == "modal") {
            toggleModal();
        }
    };
    return (
        <>
            { showModal && (
                <JournalModal toggleModal={toggleModal} closeModal={closeModal} />
            )}
        </>
    );
};