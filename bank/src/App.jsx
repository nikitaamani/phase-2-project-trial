//views
import React, { useReducer } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Form from './components/Form';
import Table from './components/Table';
import './index.css';

const initialState = {
 transactions: [],
 searchTerm: '',
 filterCategory: '',
};

function reducer(state, action) {
 switch (action.type) {
   case 'ADD_TRANSACTION':
     return {
       ...state,
       transactions: [...state.transactions, action.payload],
     };
   case 'UPDATE_SEARCH_TERM':
     return {
       ...state,
       searchTerm: action.payload,
     };
   case 'UPDATE_FILTER_CATEGORY':
     return {
       ...state,
       filterCategory: action.payload,
     };
   default:
     return state;
 }
}

function App() {
 const [state, dispatch] = useReducer(reducer, initialState);

 const filteredTransactions = state.transactions.filter(
   (transaction) =>
     transaction.description
       .toLowerCase()
       .includes(state.searchTerm.toLowerCase()) &&
     (state.filterCategory === '' || transaction.category === state.filterCategory)
 );

 const addTransaction = (newTransaction) => {
   dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });
 };

 const handleSearchTermChange = (searchTerm) => {
   dispatch({ type: 'UPDATE_SEARCH_TERM', payload: searchTerm });
 };

 const handleCategoryFilter = (category) => {
   dispatch({ type: 'UPDATE_FILTER_CATEGORY', payload: category });
 };

 return (
   <div>
     <Header />
     <SearchBar
       searchTerm={state.searchTerm}
       onSearchTermChange={handleSearchTermChange}
       onCategoryFilter={handleCategoryFilter}
     />
     <Form onAddTransaction={addTransaction} />
     <Table transactions={filteredTransactions} />
   </div>
 );
}

export default App;