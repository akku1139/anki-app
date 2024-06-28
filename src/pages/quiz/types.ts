import { Component } from "solid-js";
import { Quiz } from "~/types/quiz";

export type QuizInterface = {
  question: string,
  answer: Component,
  checkAnswer: () => boolean
}

export type QuizMethod = (quiz: Quiz) => QuizInterface
