import type { Quiz } from "~/types/quiz"
import type { QuizMethod } from "./types"
import { setAnswered } from "."

const Writing: QuizMethod = (quiz) => ({
  question: quiz.def,
  answer: <input type="text" class="text-cyan-950" onKeyDown={(e) => {
    if(e.key === "Enter") {
      setAnswered(true)
    }
  }}/>,
  checkAnswer: () => {
    return true
  }
})

export default Writing
