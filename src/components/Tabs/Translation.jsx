import React, { useState } from 'react'
import Modal from '../Modal';

const Translation = () => {
  const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <div className='tab-container'>
        <p>translation</p>
        <img src="src/assets/icons/translation.png" />
        <button className='tab-btn' onClick={openModal}>Start Translation</button>
    <p>*Audio and video file only</p>
    <p>View Recently translation files</p>
    <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  )
}

export default Translation