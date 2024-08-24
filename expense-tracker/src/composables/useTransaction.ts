import { ref } from 'vue';
import type { SubmitTransaction, Transaction } from '@/types/transaction';

export const useTransaction = () => {
  const getLocal = () => {
    const transactions = localStorage.getItem('transactions');
    return transactions ? JSON.parse(transactions) : [];
  };

  const setLocal = (transactions: Transaction[]) => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };

  const transactions = ref<Transaction[]>([]);

  const addTransaction = (newTransaction: SubmitTransaction) => {
    if (!newTransaction || !newTransaction.text || !newTransaction.amount) {
      console.error('Invalid transaction data');
      return;
    }

    const transaction: Transaction = {
      id: generateId(),
      text: newTransaction.text,
      amount: newTransaction.amount,
    };
    transactions.value = [...transactions.value, transaction];
    console.log('Transactions after adding:', transactions.value);
  };

  const generateId = () => {
    return transactions.value.length ? transactions.value[transactions.value.length - 1].id + 1 : 1;
  };

  const deleteTransaction = (id: number) => {
    if (!id || typeof id !== 'number') {
      console.error('Invalid transaction id');
      return;
    }
    transactions.value = transactions.value.filter((transaction) => transaction.id !== id);
    console.log('Transactions after deleting:', transactions.value);
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    getLocal,
    setLocal,
  };
};

/*
 * Note: Important lesson here is to separate the logic of getting and setting transactions from the logic of adding and deleting transactions.
 * Previously ran into a bug where UI was not updating after adding or deleting transactions. This was because the get and set were embedded in the add and delete functions. Event listeners worked but UI did not update. Had to use watchers as a workaround to force the UI to update.
 * By separating the logic, the UI now updates as expected.
 */
