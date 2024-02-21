<template>
  <div>
    <div class="card" @click="toggleDisplay" v-if="card">
      <span v-if="showQuestion">
        {{ card.question }}
      </span>
      <span v-else class="answer">{{ card.correct_answer }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import type { Card } from "@/stores/card-data/types";

export default defineComponent({
  props: {
    card: {
      type: Object as () => Card,
      required: true,
    },
  },
  setup(props) {
    const showQuestion = ref(true);

    // Reset to show question whenever the card changes
    watch(
      () => props.card,
      () => {
        showQuestion.value = true;
      }
    );

    function toggleDisplay() {
      showQuestion.value = !showQuestion.value;
    }
    return { showQuestion, toggleDisplay };
  },
});
</script>
<style scoped>
.card {
  font-family: Arial, sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  width: 400px;
  height: 100px;
}
.card:hover {
  transform: scale(1.05);
}

.card .answer {
  color: #007bff;
  font-weight: bold;
}
@media (max-width: 600px) {
  .card {
    margin: 10px 0;
    width: auto;
    align-self: center;
    height: auto;
  }
}
</style>
