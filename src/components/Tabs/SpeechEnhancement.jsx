import React, { useState } from 'react'
import Modal from '../Modal';

const SpeechEnhancement = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <div className='tab-container'>
        <p>Speech Enhancement</p>
        <img src="src/assets/icons/file-audio.png" />
        <button className='tab-btn' onClick={openModal}>Start speech enhancement</button>
    <p>*Audio and video file only</p>
    <p>View Recently speech enhancement files</p>
    <Modal isOpen={modalOpen} onClose={closeModal} />
</div>
  )
}

export default SpeechEnhancement