/*
This file sets up a basic store using Vue's Composition API. It uses the defineStore function from the pinia package to create a store with the id flashcard. 
The store has a state object with two properties: cards and currentCardIndex. 
The cards property is an array of Card objects, and the currentCardIndex property is a number that represents the index of the current card in the cards array.
*/
import { defineStore } from "pinia";
import { getQuestions } from "./apiCalls";
import type { Card } from "./types";
import { mockData } from "./mockData";

export const useStore = defineStore({
  id: "flashcard",
  state: () => ({
    cards: [] as Card[],
    currentCardIndex: 0,
  }),
  actions: {
    // Fetch cards from the API
    async fetchCards(count: number) {
      try {
        const response = await getQuestions(count);
        this.cards = response.results;
      } catch (error) {
        console.error("Error fetching cards:", error);
        // for test purposes use mock data if the API fails
        this.cards = mockData;
      }
    },
    // Set the current card index
    setCurrentCardIndex(index: number) {
      this.currentCardIndex = index;
    },
    // Set the next card as the current card
    nextCard() {
      if (this.currentCardIndex < this.cards.length - 1) {
        this.currentCardIndex++;
        this.setCurrentCardIndex(this.currentCardIndex);
      }
    },
    // Set the previous card as the current card
    previousCard() {
      if (this.currentCardIndex > 0) {
        this.currentCardIndex--;
        this.setCurrentCardIndex(this.currentCardIndex);
      }
    },
  },
  getters: {
    currentCard: (state) => state.cards[state.currentCardIndex],
    totalCards: (state) => state.cards.length,
  },
});
