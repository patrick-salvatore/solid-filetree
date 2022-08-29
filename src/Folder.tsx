import { createSignal, JSXElement, Match, Switch, Show } from "solid-js";

import { FaSolidChevronRight } from "solid-icons/fa";
import { FaSolidChevronDown } from "solid-icons/fa";

import { Default } from "./utils/config";

import type { TreeNode } from "./types";

export const Folder = (props: { folder: TreeNode; children: JSXElement }) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class={`${Default.CSS_NAMESPACE}__folder-root`}>
      <div class={`${Default.CSS_NAMESPACE}__folder-name`} onClick={() => setIsOpen((o) => !o)}>
        <Switch>
          <Match when={!isOpen()}>
            <FaSolidChevronRight />
          </Match>
          <Match when={isOpen()}>
            <FaSolidChevronDown />
          </Match>
        </Switch>
        <span class={`${Default.CSS_NAMESPACE}__folder-name-text`}>{props.folder.name}</span>
      </div>
      {/* <div class={isOpen() ? `${Default.CSS_NAMESPACE}__vertical-line` : ""}> */}
      <div class={`${Default.CSS_NAMESPACE}__folder-collapse ${isOpen() ? "open" : ""}`}>
        <Show when={isOpen()}>
          <div class={`${Default.CSS_NAMESPACE}__folder-contents`}>{props.children}</div>
        </Show>
      </div>
      {/* </div> */}
    </div>
  );
};
