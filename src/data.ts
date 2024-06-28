import { createEffect, createMemo, createSignal, on } from "solid-js"
import { Set } from "~/types/set"

type Sets = {
  [keyURL: string]: Set
}

export const [sets, setSets] = createSignal<Sets>({})

type LsData = Array<[
  string, // url
  string  // title
]>

const [ls, setLs] = createSignal<string>(localStorage.getItem("sets") ?? "[]")
createEffect(on(ls, () => {
  let parsed: LsData = []
  localStorage.setItem("sets", ls())
  if(ls() !== null) {
    try {
      parsed = JSON.parse(ls())
    } catch(e) {
      console.error("保存したデータのパースに失敗")
      localStorage.setItem("sets", "[]")
      parsed = []
    }
  }
  parsed.forEach(([url, title]) => {
    setSets({
      ...sets(),
      [url]: {
        url,
        title,
        getQuizzes: async () => (await (await fetch(url)).json()).quizzes
      }
    })
  })
}))

export const addSource = async (url: string) => {
  const res = await (await fetch(url)).json()
  setLs(JSON.stringify([...JSON.parse(ls()), [url, res.title]]))
}
