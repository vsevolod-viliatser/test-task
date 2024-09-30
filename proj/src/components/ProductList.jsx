import React, { useState } from 'react';

function ProductList({ products, onAddProduct, onDeleteProduct, onViewProduct }) {
    const [sortCriteria, setSortCriteria] = useState('alphabetical');

    const sortedProducts = [...products].sort((a, b) => {
        if (sortCriteria === 'alphabetical') {
            return a.name.localeCompare(b.name);
        } else if (sortCriteria === 'count') {
            return a.count - b.count;
        }
        return 0;
    });

    return (
        <div>
            <header>
                <h1>Product List</h1>
                <button onClick={onAddProduct}>+ Add Product</button>
                <select onChange={e => setSortCriteria(e.target.value)}>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="count">Count</option>
                </select>
            </header>
            <ul>
                {sortedProducts.map(product => (
                    <li key={product.id}>
                        <img src={product.imageUrl} alt={product.name} width={100} />
                        <span>{product.name} - {product.count} - {product.weight}</span>
                        <button onClick={() => onDeleteProduct(product)}>Delete</button>
                        <button onClick={() => onViewProduct(product)}>View</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
