import React, { useState } from 'react';
import Modal from 'react-modal';

function AddProductModal({ isOpen, onClose, onAdd }) {
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [weight, setWeight] = useState('');

    const handleAdd = () => {
        if (!name || count <= 0 || !weight || !imageUrl) {
            alert("All fields are required!");
            return;
        }
        onAdd({ imageUrl, name, count, weight });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Add New Product</h2>
            <input type="text" placeholder="Image URL" onChange={e => setImageUrl(e.target.value)} />
            <input type="text" placeholder="Product Name" onChange={e => setName(e.target.value)} />
            <input type="number" placeholder="Count" onChange={e => setCount(parseInt(e.target.value))} />
            <input type="text" placeholder="Weight" onChange={e => setWeight(e.target.value)} />
            <button onClick={handleAdd}>Add Product</button>
            <button onClick={onClose}>Cancel</button>
        </Modal>
    );
}

export default AddProductModal;
