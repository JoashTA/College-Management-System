import React, { useState } from "react";
import TransactionForm from "../components/TransactionForm.js";
import TransactionList from "../components/TransactionList";
import styles from "../styles/Transactions.module.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <h1>Transaction Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default Transactions;