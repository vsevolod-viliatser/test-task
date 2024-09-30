import React from 'react';
import Modal from 'react-modal';

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this product?</p>
            <button onClick={onConfirm}>Yes, Delete</button>
            <button onClick={onClose}>Cancel</button>
        </Modal>
    );
}

export default DeleteConfirmationModal;
