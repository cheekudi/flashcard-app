<template>
  <button @click="$emit('click')" class="card-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
});
</script>
<style scoped>
.card-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 125px;
}
.card-button:hover {
  background-color: #0056b3;
}

.card-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
