import React, { useReducer } from 'react';
import '../index.css';

const initialState = {
 date: '',
 description: '',
 category: '',
 amount: '',
};

function reducer(state, action) {
 switch (action.type) {
   case 'UPDATE_FIELD':
     return {
       ...state,
       [action.payload.name]: action.payload.value,
     };
   case 'RESET_FORM':
     return initialState;
   default:
     return state;
 }
}

function Form({ onAddTransaction }) {
 const [formData, dispatch] = useReducer(reducer, initialState);

 const handleChange = (e) => {
   const { name, value } = e.target;
   dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   onAddTransaction(formData);
   dispatch({ type: 'RESET_FORM' });
 };

 return (
   <div className="form-container">
     <form onSubmit={handleSubmit}>
       <div className="input-row">
         <div className="input-column">
           <div className="input-wrapper">
             <label>Date: </label>
             <input
               type="date"
               name="date"
               value={formData.date}
               onChange={handleChange}
               className="input-field"
               required
             />
           </div>
         </div>
         <div className="input-column">
           <div className="input-wrapper">
             <input
               type="text"
               name="description"
               value={formData.description}
               onChange={handleChange}
               className="input-field"
               placeholder="Description"
               required
             />
           </div>
         </div>
         <div className="input-column">
           <div className="input-wrapper">
             <input
               type="text"
               name="category"
               value={formData.category}
               onChange={handleChange}
               className="input-field"
               placeholder="Category"
               required
             />
           </div>
         </div>
         <div className="input-column">
           <div className="input-wrapper">
             <input
               type="number"
               name="amount"
               value={formData.amount}
               onChange={handleChange}
               className="input-field"
               placeholder="Amount"
               required
             />
           </div>
         </div>
       </div>
       <button type="submit" className="submit-button">
         Add Transaction
       </button>
     </form>
   </div>
 );
}

export default Form;