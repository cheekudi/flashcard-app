<template>
  <div class="main">
    <div class="header">
      <h1>Flash Cards</h1>
    </div>
    <div v-if="currentCard" class="viewer-container">
      <div class="card-container">
        <Card :card="currentCard" />
      </div>

      <div class="footer">
        <Button @click="goToPreviousCard" :disabled="currentCardIndex == 0">
          ← Previous
        </Button>
        <span class="card-indicator"
          >Card {{ currentCardIndex + 1 }} of {{ totalCards }}</span
        >
        <Button
          @click="goToNextCard"
          :disabled="currentCardIndex == totalCards - 1"
          >Next →</Button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/card-data/store";
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  components: { Card, Button },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.fetchCards(25);
    });

    const { currentCard } = storeToRefs(store);
    const { currentCardIndex } = storeToRefs(store);
    const { totalCards } = storeToRefs(store);

    return {
      currentCard,
      totalCards,
      currentCardIndex,
      goToPreviousCard: () => store.previousCard(),
      goToNextCard: () => store.nextCard(),
    };
  },
});
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.header {
  display: flex;
  align-items: center;
}
h1 {
  flex-grow: 1;
  text-align: center;
}
.viewer-container {
  width: 400px;
  height: 200px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.card-container {
  display: flex;
  justify-content: center;
}

.footer {
  margin: 15px 0;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
}

.card-indicator {
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
}

@media (max-width: 600px) {
  .card-viewer {
    flex-direction: column;
  }

  .viewer-container {
    width: 90%;
    height: auto;
  }
}
</style>
