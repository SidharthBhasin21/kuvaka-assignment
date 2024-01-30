import React, { useState } from 'react'
import Modal from '../Modal';
import audioFile from '../../assets/icons/file-audio.png'


const SpeechEnhancement = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <div className='tab-container'>
        <p>Speech Enhancement</p>
        <img src={audioFile} />
        <button className='tab-btn' onClick={openModal}>Start speech enhancement</button>
    <p>*Audio and video file only</p>
    <p>View Recently speech enhancement files</p>
    <Modal isOpen={modalOpen} onClose={closeModal} />
</div>
  )
}

export default SpeechEnhancement