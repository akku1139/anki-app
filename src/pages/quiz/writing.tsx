import type { Quiz } from "~/types/quiz"
import type { QuizMethod } from "./types"

const Writing: QuizMethod = (quiz) => ({
  question: quiz.def,
  answer: <input type="text" class="text-cyan-950" />,
  checkAnswer: () => {
    return true
  }
})

export default Writing
