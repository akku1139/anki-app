import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router"

export default () => (
  <Router>
    <Route path="/" component={lazy(() => import("./pages/home"))} />
    <Route path="/quiz/:setID" component={lazy(() => import("./pages/quiz"))} />
    <Route path="/sets" component={lazy(() => import("./pages/sets"))} />
    <Route path="*404" component={lazy(() => import("./pages/404"))} />
  </Router>
)
