import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router"
// import App from "./App"

export default () => (
  <Router /*root={App}*/>
    <Route path="/" component={lazy(() => import("./pages/home"))} />
    <Route path="/quiz/" component={lazy(() => import("./pages/startQuiz"))} />
    <Route path="/quiz/:setID" component={lazy(() => import("./pages/quiz"))} />
    <Route path="/sets/" component={lazy(() => import("./pages/sets"))} />
    <Route path="*404" component={lazy(() => import("./pages/404"))} />
  </Router>
)
