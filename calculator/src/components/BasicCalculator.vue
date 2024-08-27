<script setup lang="ts">
import { ref, computed } from "vue";

const display = ref("0");

const appendToDisplay = (value: any) => {
  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
};

const calculate = () => {
  try {
    display.value = eval(display.value).toString();
  } catch (error) {
    display.value = "Error";
  }
};

const deleteLastChar = () => {
  display.value = display.value.slice(0, -1);
};

// Computed property for dynamic class binding
const displayClass = computed(() => {
  return display.value.length > 12 ? "small-text" : "";
});

const clearDisplay = () => {
  display.value = "0";
};
</script>

<template>
  <div>
    <div class="calculator">
      <input v-model="display" :class="displayClass" readonly />

      <div class="buttons">
        <button @click="appendToDisplay('7')">7</button>
        <button @click="appendToDisplay('8')">8</button>
        <button @click="appendToDisplay('9')">9</button>
        <button @click="appendToDisplay('/')" class="operator">/</button>

        <button @click="appendToDisplay('4')">4</button>
        <button @click="appendToDisplay('5')">5</button>
        <button @click="appendToDisplay('6')">6</button>
        <button @click="appendToDisplay('*')" class="operator">*</button>

        <button @click="appendToDisplay('1')">1</button>
        <button @click="appendToDisplay('2')">2</button>
        <button @click="appendToDisplay('3')">3</button>
        <button @click="appendToDisplay('-')" class="operator">-</button>

        <button @click="appendToDisplay('0')">0</button>
        <button @click="appendToDisplay('.')">.</button>
        <button @click="calculate()">=</button>
        <button @click="appendToDisplay('+')" class="operator">+</button>
      </div>

      <div class="functions">
        <button @click="clearDisplay" class="clear-button">C</button>
        <button @click="deleteLastChar" class="delete-button">DEL</button>
      </div>
    </div>
  </div>
</template>

<style>
input {
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: right;
  border: 1px solid #636363;
  border-radius: 5px;
  background-color: rgb(20, 20, 20);
}

.calculator {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.display {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  text-align: right;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.operator {
  background-color: #e29a2d;
}

.functions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.clear-button {
  width: 70%;
  margin-top: 10px;
  background-color: #3a3fa2;
}

.delete-button {
  width: 30%;
  margin-top: 10px;
  background-color: #d34141;
}

.small-text {
  font-size: 14px;
}
</style>
