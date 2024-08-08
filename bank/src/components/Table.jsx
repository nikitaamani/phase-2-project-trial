import React, { useState } from 'react';
import '../index.css';

const Table = ({ transactions }) => {
  const [sortOrder, setSortOrder] = useState('');

  const sortTransactions = (order) => {
    if (order === 'categoryAsc') {
      return [...transactions].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    } else if (order === 'categoryDesc') {
      return [...transactions].sort((a, b) =>
        b.category.localeCompare(a.category)
      );
    } else if (order === 'descriptionAsc') {
      return [...transactions].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    } else if (order === 'descriptionDesc') {
      return [...transactions].sort((a, b) =>
        b.description.localeCompare(a.description)
      );
    } else {
      return transactions;
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedTransactions = sortTransactions(sortOrder);

  const renderTableRows = () => {
    return sortedTransactions.map((transaction, index) => (
      <tr key={index}>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="sort-container">
        <label htmlFor="sort-select">Sort By:</label>
        <select id="sort-select" value={sortOrder} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="categoryAsc">Category (A-Z)</option>
          <option value="categoryDesc">Category (Z-A)</option>
          <option value="descriptionAsc">Description (A-Z)</option>
          <option value="descriptionDesc">Description (Z-A)</option>
        </select>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;