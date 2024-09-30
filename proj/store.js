// store.js
import { createStore } from 'redux';

const initialState = {
    products: [],
    currentView: 'list',
    selectedProduct: null,
    isAddModalOpen: false,
    isDeleteModalOpen: false,
    productToDelete: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, { ...action.payload, id: state.products.length + 1, comments: [] }],
                isAddModalOpen: false,
            };
        case 'EDIT_PRODUCT':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                ),
                currentView: 'list',
                selectedProduct: null,
            };
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id),
                isDeleteModalOpen: false,
            };
        case 'SET_CURRENT_VIEW':
            return {
                ...state,
                currentView: action.payload,
            };
        case 'SET_SELECTED_PRODUCT':
            return {
                ...state,
                selectedProduct: action.payload,
                currentView: 'view',
            };
        case 'TOGGLE_ADD_MODAL':
            return {
                ...state,
                isAddModalOpen: !state.isAddModalOpen,
            };
        case 'TOGGLE_DELETE_MODAL':
            return {
                ...state,
                productToDelete: action.payload,
                isDeleteModalOpen: !state.isDeleteModalOpen,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
