import { useParams } from "@solidjs/router"
import { createSignal, Show, onMount, createEffect, on } from "solid-js"

import { sets } from "~/data"
import NotFound from "../404"
import { Quiz } from "~/types/quiz"
import { QuizInterface } from "./types"

import Writing from "./writing"

export const [answered, setAnswered] = createSignal<boolean>(false)

export default () => {
  const params = useParams()
  const [found, setFound] = createSignal<boolean>(false)
  const [loaded, setLoaded] = createSignal<boolean>(false)
  const [quiz, setQuiz] = createSignal<Array<Quiz>>([])
  const [nowQuiz, setNowQuiz] = createSignal<Quiz>({
    term: "デフォルト値",
    def: "デフォルト値"
  })
  const [quizInterface, setQuizInterface] = createSignal<QuizInterface>(Writing(nowQuiz()))
  const [quizCount, setQuizCount] = createSignal<number>(0)
  const [checked, setChecked] = createSignal<boolean>(false)
  const setID = decodeURIComponent(params.setID)

  setFound(typeof sets()[setID] !== "undefined")

  if(found()) {
    sets()[setID].getQuizzes().then((q) => {
      setQuiz(q)
      setNowQuiz(quiz()[0])
      setQuizInterface(Writing(nowQuiz()))
      setLoaded(true)
    })
  }

  createEffect(on(quizCount, () => {
    setNowQuiz(quiz()[quizCount()])
  }))

  createEffect(on(answered, (e) => {
    if(! answered()) return
    // 良くないコード
    const isCorrectAnswer = quizInterface().checkAnswer()
    setChecked(true)
  }))

  return <>
    <Show when={found()} fallback={<NotFound />}>
      <Show when={loaded()} fallback={<div>loading...</div>}>
        <div class="flex">
          <span class="">{sets()[setID].title}</span>
          <span class="">{quizCount()} / {quiz().length}</span>
        </div>
        <progress class="w-full" value={quizCount()} max={quiz().length} />
        <div class="text-xl">{quizInterface().question}</div>
        {quizInterface().answer({})}
        <Show when={checked()}>
          <button autofocus={true} onClick={(e) => {
            setAnswered(false)
            setChecked(false)
            setQuizCount(quizCount() + 1)
            setQuizInterface(Writing(nowQuiz()))
          }}>次の問題</button>
        </Show>
      </Show>
    </Show>
  </>
}
