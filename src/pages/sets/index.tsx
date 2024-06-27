import { For, Show, createSignal } from "solid-js"
import { sets } from "~/data"
import { A, useNavigate, useSearchParams } from "@solidjs/router";
import { addSet } from "./control";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [addForm, setAddFormShow] = createSignal<boolean>(false)

  let setURL: HTMLInputElement

  const gotoHome = () => {
    alert("問題の發生が有りました")
    return useNavigate()("/")
  }

  if(searchParams.add) {
    let urls: Array<string> = []
    try {
      urls = JSON.parse(searchParams.add)
    } catch(e) {
      gotoHome()
    }
    if(!Array.isArray(urls)) {
      gotoHome()
    }
    urls.forEach((url) => {
      if(confirm(`${url} を追加します`)) {
        addSet(url)
      }
    })
  }

  return <>
    <A href="/">戻る</A>
    <div>
      <For each={Object.values(sets())}>{(set) =>
        <div class="border-2 rounded-lg h-20 w-5/6 mx-auto my-3 flex items-center justify-center">
          {set.title}
        </div>}
      </For>
    </div>
    <Show when={addForm()} fallback={
      <button class="border-2 rounded-lg h-20 w-5/6 mx-auto my-3 flex items-center justify-center"
        onClick={(e) => {
          setAddFormShow(true)
        }}
      >
        <span class="text-2xl mr-5">+</span>
          セットを追加する
      </button>
    }>
      <div class="border-2 rounded-lg h-20 w-5/6 mx-auto my-3 flex items-center justify-center">
        <div>
          <label for="setURL" class="mr-2">URLを入力</label>
          <input id="setURL" type="url" class="text-cyan-950" placeholder="https://example.com/set.json" autofocus={true} ref={setURL} />
        </div>
        <div>
          <button onClick={(e) => {
            addSet(
              setURL.value
            )
            setURL.value = ""
            setAddFormShow(false)
          }}>[ 追加 ]</button>
          <button onClick={(e) => {
            setAddFormShow(false)
          }}>[ やっぱやめた ]</button>
        </div>
      </div>
    </Show>
  </>
}
