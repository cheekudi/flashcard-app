import type { CardResponse } from "./types";
import api from "@/shared/interceptors";

// Get questions and answers from the API
export async function getQuestions(count: number): Promise<CardResponse> {
  return new Promise((resolve, reject) => {
    api
      .get(`?amount=${count}&category=18&difficulty=hard&type=multiple`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
