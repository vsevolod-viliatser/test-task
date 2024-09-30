import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from './components/ProductList';
import ProductView from './components/ProductView';
import AddProductModal from './components/AddProductModal';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';

function App() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const currentView = useSelector(state => state.currentView);
    const selectedProduct = useSelector(state => state.selectedProduct);
    const isAddModalOpen = useSelector(state => state.isAddModalOpen);
    const isDeleteModalOpen = useSelector(state => state.isDeleteModalOpen);
    const productToDelete = useSelector(state => state.productToDelete);

    const addProduct = (product) => {
        dispatch({ type: 'ADD_PRODUCT', payload: product });
    };

    const editProduct = (updatedProduct) => {
        dispatch({ type: 'EDIT_PRODUCT', payload: updatedProduct });
    };

    const deleteProduct = () => {
        dispatch({ type: 'DELETE_PRODUCT', payload: productToDelete });
    };

    const handleViewProduct = (product) => {
        dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product });
    };

    return (
        <div>
            {currentView === 'list' ? (
                <ProductList 
                    products={products} 
                    onAddProduct={() => dispatch({ type: 'TOGGLE_ADD_MODAL' })} 
                    onDeleteProduct={(product) => dispatch({ type: 'TOGGLE_DELETE_MODAL', payload: product })} 
                    onViewProduct={handleViewProduct} 
                />
            ) : (
                <ProductView 
                    product={selectedProduct} 
                    onEdit={editProduct} 
                    onDelete={(product) => dispatch({ type: 'TOGGLE_DELETE_MODAL', payload: product })} 
                />
            )}
            <AddProductModal 
                isOpen={isAddModalOpen} 
                onClose={() => dispatch({ type: 'TOGGLE_ADD_MODAL' })} 
                onAdd={addProduct} 
            />
            <DeleteConfirmationModal 
                isOpen={isDeleteModalOpen} 
                onClose={() => dispatch({ type: 'TOGGLE_DELETE_MODAL' })} 
                onConfirm={deleteProduct} 
            />
        </div>
    );
}

export default App;
