import { A } from "@solidjs/router"
import type { Set } from "~/types/set"
import LinkButton from "./linkButton"

export default (props: {
  set: Set
}) => <LinkButton href={`/quiz/${encodeURIComponent(props.set.url)}`}>
    {props.set.title}
</LinkButton>
