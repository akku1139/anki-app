import { For } from "solid-js"
import { sets } from "~/data"

export default () => {
  return <>
    <div>
      <For each={sets[0]()}>{(set, i) =>
        <div>
          <div>{set.title}</div>
        </div>}
      </For>
    </div>
    <button>セットを追加する</button>
  </>
}
