import React, { useState } from 'react'
import Modal from '../Modal';

const Addnew = () => {   
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className='tab-container'>
            <img src="src/assets/icons/file-arrow-up.png" />
            <button className='tab-btn' onClick={openModal}> Upload the file </button>
            <p>* Audio and video file only</p>
            <Modal isOpen={modalOpen} onClose={closeModal} />
        </div>
    )
}

export default Addnew