import React from 'react'

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <h3>Upload File From</h3>
            <div className='modal-upload'> <img src='src/assets/icons/desktop.png'/><img src='src/assets/icons/decrackle.png'/></div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal