import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function EditProductModal({ isOpen, onClose, product, onEdit }) {
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [weight, setWeight] = useState('');

    useEffect(() => {
        if (product) {
            setImageUrl(product.imageUrl);
            setName(product.name);
            setCount(product.count);
            setWeight(product.weight);
        }
    }, [product]);

    const handleEdit = () => {
        if (!name || count <= 0 || !weight || !imageUrl) {
            alert("All fields are required!");
            return;
        }
        onEdit({ ...product, imageUrl, name, count, weight });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Edit Product</h2>
            <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="number" placeholder="Count" value={count} onChange={e => setCount(parseInt(e.target.value))} />
            <input type="text" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)} />
            <button onClick={handleEdit}>Save Changes</button>
            <button onClick={onClose}>Cancel</button>
        </Modal>
    );
}

export default EditProductModal;
