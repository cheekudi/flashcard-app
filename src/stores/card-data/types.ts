// define card data type
interface Card {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// define card response type
interface CardResponse {
  response_code: number;
  results: Card[];
}

export type { Card, CardResponse };
