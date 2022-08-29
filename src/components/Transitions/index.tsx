import type { TransitionProps } from "./types";

export function Transition(props: TransitionProps) {
  return props.children();
}
