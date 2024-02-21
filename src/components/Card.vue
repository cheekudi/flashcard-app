<template>
  <div>
    <div class="card" @click="toggleDisplay" v-if="card">
      <span v-if="showQuestion">
        {{ card.question }}
      </span>
      <span v-else>{{ card.correct_answer }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
}
.card:hover {
  transform: scale(1.05);
}
@media (max-width: 600px) {
  .card {
    margin: 10px 0;
    width: 90%;
    align-self: center;
  }
}
</style>
