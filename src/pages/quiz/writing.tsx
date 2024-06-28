import type { Quiz } from "~/types/quiz"
import type { QuizMethod } from "./types"
import { answered, setAnswered } from "."
import { Show, createSignal } from "solid-js"

const [inputColor, setInputColor] = createSignal<string>("text-cyan-950 bg-cyan-50")
let answerBox: HTMLInputElement

const Writing: QuizMethod = (quiz) => ({
  question: quiz.def,
  answer: () => {
    setInputColor("text-cyan-950 bg-cyan-50")
    return <>
      <input type="text" class={`p-3 rounded-lg ${inputColor()}`} autofocus={true} ref={answerBox} onKeyDown={(e) => {
        if(e.key === "Enter") {
          setAnswered(true)
        }
      }} disabled={answered()} />
      <Show when={answered()}>
        <div>
          正しい囘答: {quiz.term}
        </div>
        <Show when={quiz.desc}>
          <div>
            {quiz.desc}
          </div>
        </Show>
      </Show>
    </>
  },
  checkAnswer: () => {
    if(!answerBox) return false
    const answer = answerBox.value
    const correct = quiz.term === answer
    setInputColor(correct ? "text-green-50 bg-green-400" : "text-red-50 bg-red-400")
    return correct
  }
})

export default Writing
