/* @refresh reload */
import { render } from "solid-js/web"

import "./index.css"
// import "tailwindcss/base.css"
import App from "./App"

import { sets } from "./data"

const root = document.getElementById("root")

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  )
}

console.log(`${sets().length} 個のセットがあります`)

render(() => <App />, root!)
