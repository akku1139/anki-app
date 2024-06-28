import { For } from "solid-js"
import { sets } from "~/data"
import Set from "~/components/set"
import { A } from "@solidjs/router"

export default () => {
  return <>
    <div class="text-xl">回答するセットをお選びください</div>
    <div>
      <For each={Object.values(sets())}>{(set, i) => <Set set={set}></Set>}</For>
    </div>
    <A href="/">戻る</A>
  </>
}
