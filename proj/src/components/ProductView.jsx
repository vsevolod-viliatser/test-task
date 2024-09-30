import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import CommentSection from './CommentSection';

function ProductView({ product, onEdit, onDelete }) {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
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
        setEditModalOpen(false);
    };

    return (
        <div>
            <h1>{name}</h1>
            <img src={imageUrl} alt={name} width={200} />
            <p>Count: {count}</p>
            <p>Weight: {weight}</p>
            <button onClick={() => setEditModalOpen(true)}>Edit Product</button>
            <button onClick={() => onDelete(product)}>Delete</button>
            <CommentSection productId={product.id} />

            <Modal isOpen={isEditModalOpen} onRequestClose={() => setEditModalOpen(false)}>
                <h2>Edit Product</h2>
                <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="number" placeholder="Count" value={count} onChange={e => setCount(parseInt(e.target.value))} />
                <input type="text" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)} />
                <button onClick={handleEdit}>Save Changes</button>
                <button onClick={() => setEditModalOpen(false)}>Cancel</button>
            </Modal>
        </div>
    );
}

export default ProductView;
