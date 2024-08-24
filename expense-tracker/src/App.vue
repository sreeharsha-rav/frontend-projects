<script setup lang="ts">
import { onMounted, computed } from 'vue';
import MoneyBalance from './components/MoneyBalance.vue';
import IncomeExpenses from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import { useTransaction } from './composables/useTransaction';
import type { SubmitTransaction } from './types/transaction';
import { toast } from 'vue3-toastify';

const { transactions, addTransaction, deleteTransaction, getLocal, setLocal } = useTransaction();

onMounted(() => {
  const localTransactions = getLocal();
  if (localTransactions) {
    console.log('Local transactions:', localTransactions);
    transactions.value = localTransactions;
  }
});

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0);
});

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
});

const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
});

const handleAddTransaction = (newTransaction: SubmitTransaction) => {
  addTransaction(newTransaction);
  setLocal(transactions.value); // Update local storage
  toast('Transaction added', { type: 'success' });
};

const handleDeleteTransaction = (id: number) => {
  deleteTransaction(id);
  setLocal(transactions.value); // Update local storage
  toast('Transaction deleted', { type: 'success' });
};
</script>

<template>
  <header>
    <h1>Expense Tracker</h1>
  </header>

  <main>
    <div class="container">
      <MoneyBalance :total="total" />
      <IncomeExpenses :income="income" :expense="expense" />
      <TransactionList :transactions="transactions" @delete-transaction="handleDeleteTransaction" />
      <AddTransaction @add-transaction="handleAddTransaction" />
    </div>
  </main>
</template>
