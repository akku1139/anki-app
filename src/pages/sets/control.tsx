import { addSource } from "~/data"

export const addSet = (url: string) => {
  if(!URL.canParse(url)) {
    alert("間違ったURL")
    return
  }
  addSource(url)
}
