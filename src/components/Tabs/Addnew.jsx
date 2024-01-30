import React, { useState } from 'react'
import Modal from '../Modal';
import fileArrow from '../../assets/icons/file-arrow-up.png'
const Addnew = () => {   
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className='tab-container'>
            <img src={fileArrow} />
            <button className='tab-btn' onClick={openModal}> Upload the file </button>
            <p>* Audio and video file only</p>
            <Modal isOpen={modalOpen} onClose={closeModal} />
        </div>
    )
}

export default Addnew