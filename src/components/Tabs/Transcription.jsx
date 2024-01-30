import React, { useState } from 'react'
import Modal from '../Modal';
import subtitles from '../../assets/icons/subtitles.png'
const Transcription = () => {
  const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <div className='tab-container'>
        <p>Transcription</p>
        <img src={subtitles}/>
        <button className='tab-btn' onClick={openModal}>Start Transcription</button>
    <p>*Audio and video file only</p>
    <p>View Recently Transcription files</p>
    <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  )
}

export default Transcription