import { A, useParams } from "@solidjs/router"
import { createSignal, Show, onMount, createEffect } from "solid-js"

import { sets } from "~/data"
import NotFound from "../404"
import { Quiz } from "~/types/quiz"
import { QuizInterface, QuizMethod } from "./types"

import Writing from "./writing"

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
  const setID = decodeURIComponent(params.setID)
  let bar = <progress class="w-full" />

  setFound(typeof sets()[setID] !== "undefined")

  if(found()) {
    sets()[setID].getQuizzes().then((q) => {
      setQuiz(q)
      setNowQuiz(quiz()[0])
      setQuizInterface(Writing(nowQuiz()))
      setLoaded(true)
    })
  }

  onMount(() => {
    createEffect(() => {
      bar.value = quizCount()
    })

    bar.max = quiz().length
  });

  createEffect(() => {

  })

  return <>
    <Show when={found()} fallback={<NotFound />}>
      <Show when={loaded()} fallback={<div>loading...</div>}>
        <div class="flex">
          <span class="">{sets()[setID].title}</span>
          <span class="">{quizCount()} / {quiz().length}</span>
        </div>
        {bar}
        <div class="text-xl">{quizInterface().question}</div>
        {quizInterface().answer}
      </Show>
    </Show>
  </>
}
