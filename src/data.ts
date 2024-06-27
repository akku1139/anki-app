import { createEffect, createSignal } from "solid-js"
import { Set } from "~/types/set"

export const [sets, setSets] = createSignal<{
  [keyURL: string]: Set
}>({})

type LsData = Array<[
  string, // url
  string  // title
]>

const [ls, setLs] = createSignal<string>(localStorage.getItem("sets") ?? "[]")
createEffect(() => {
  let parsed: LsData = []
  console.log(ls())
  if(ls() !== null) {
    try {
      parsed = JSON.parse(ls())
    } catch(e) {
      console.error("保存したデータのパースに失敗")
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
})

export const addSource = async (url: string) => {
  const res = await (await fetch(url)).json()
  setLs([...JSON.parse(ls()), [url, res.title]])
}
