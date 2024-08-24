<script setup lang="ts">
import { ref } from 'vue';
import type { SubmitTransaction } from '../types/transaction';
import { toast } from 'vue3-toastify';

const emit = defineEmits<{
  (event: 'add-transaction', newTransaction: SubmitTransaction): void;
}>();
const text = ref<string>('');
const amount = ref<number>(0.0);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast('Please add a text and amount', { type: 'error' });
    return;
  } else {
    const newTransaction: SubmitTransaction = {
      text: text.value,
      amount: amount.value,
    };

    emit('add-transaction', newTransaction);
    text.value = '';
    amount.value = 0.0;
  }
};
</script>

<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount">Amount</label>
      <input type="number" id="amount" v-model="amount" placeholder="Enter amount..." />
    </div>
    <button class="btn" type="submit">Add transaction</button>
  </form>
</template>
