import { createSignal } from "solid-js"
import { Set } from "~/types/set"

export const [sets, setSets] = createSignal<Array<Set>>([
  {
    url: "https://example.com/set.json",
    title: "テストセット1",
    quizzes: [
      {
        key: "aaa",
        answer: "bbb"
      }
    ]
  }
])

// localStrageを使う
