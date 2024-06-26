import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router"

const Home = lazy(() => import("./pages/home"))
const NotFound = lazy(() => import("./pages/404"))

export default () => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="*404" component={NotFound} />
  </Router>
)
