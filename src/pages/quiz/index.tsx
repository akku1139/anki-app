import { A, useParams } from "@solidjs/router"
import { createSignal, Show } from "solid-js"

import { sets } from "~/data"
import NotFound from "../404"

export default () => {
  const params = useParams()
  const [found, setFound] = createSignal<boolean>()

  setFound(Boolean(sets().find((set) => set.url === decodeURIComponent(params.setID))))

  const [quizCount, setQuizCount] = createSignal<number>(0)

  return <>
    <Show when={found()} fallback={<NotFound />}>
      <div>現在 {quizCount() + 1} 問目です</div>
    </Show>
  </>
}
