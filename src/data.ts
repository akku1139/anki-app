import { createSignal } from "solid-js"
import { Set } from "~/types/set"

export const [sets, setSets] = createSignal<Array<Set>>([
  {
    url: "https://example.com/set.json",
    title: "テストセット1",
    quizzes: [
      {
        term: "aaa",
        def: "bbb"
      }
    ]
  }
])

const ls = localStorage.getItem("sets")
if(ls !== null) {
  let parsed
  try {
    parsed = JSON.parse(ls)
  } catch(e) {
    console.error("保存したデータのパースに失敗")
    parsed = []
  }
}
