import React, { useReducer } from 'react';

const initialState = {
 searchTerm: '',
};

function reducer(state, action) {
 switch (action.type) {
   case 'UPDATE_SEARCH_TERM':
     return {
       ...state,
       searchTerm: action.payload,
     };
   default:
     return state;
 }
}

function SearchBar({ onSearchTermChange }) {
 const [state, dispatch] = useReducer(reducer, initialState);

 const handleSearchTermChange = (value) => {
   dispatch({ type: 'UPDATE_SEARCH_TERM', payload: value });
   onSearchTermChange(value);
 };

 return (
   <div className="search-container">
     <input
       type="text"
       placeholder="Search your Recent Transactions"
       value={state.searchTerm}
       onChange={(e) => handleSearchTermChange(e.target.value)}
     />
   </div>
 );
}

export default SearchBar;