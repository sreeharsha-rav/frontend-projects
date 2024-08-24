<script setup lang="ts">
import type { Transaction } from '../types/transaction';

defineProps({
  transactions: {
    type: Array as () => Transaction[],
    required: true,
  },
});
const emit = defineEmits(['delete-transaction']);

const deleteTransaction = (id: number) => {
  emit('delete-transaction', id);
};
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }}
      <span>{{ transaction.amount < 0 ? '-' : '+' }}${{ Math.abs(transaction.amount) }}</span>
      <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
    </li>
  </ul>
</template>
