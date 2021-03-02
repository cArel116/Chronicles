import React, { useState } from 'react';
import { JournalModal } from '../components/journal/JournalEntryModal';
import '../components/journal/Journal.css';

export const JournalModalContainer = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = e => {
        if (e.target.id === "modal") {
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