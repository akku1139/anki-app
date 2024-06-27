import { A } from "@solidjs/router";
import { JSX } from "solid-js";

const LinkButton = (props: {
  href: string,
  children: JSX.Element
}) => <div class="border-2 rounded-lg h-20 w-5/6 mx-auto my-3 flex">
  <A class="w-full h-full flex items-center justify-center text-lg" href={props.href}>
    {props.children}
  </A>
</div>

export default LinkButton
