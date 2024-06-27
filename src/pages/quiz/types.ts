import { JSXElement } from "solid-js";
import { Quiz } from "~/types/quiz";

export type QuizInterface = {
  question: string,
  answer: JSXElement,
  checkAnswer: () => boolean
}

export type QuizMethod = (quiz: Quiz) => QuizInterface
