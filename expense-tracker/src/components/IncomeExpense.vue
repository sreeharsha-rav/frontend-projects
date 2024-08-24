<script setup lang="ts">
defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p class="money plus">
        <span>+${{ Math.abs(income) }}</span>
      </p>
    </div>
    <div>
      <h4>Expense</h4>
      <p class="money minus">
        <span>-${{ Math.abs(expense) }}</span>
      </p>
    </div>
  </div>
</template>
