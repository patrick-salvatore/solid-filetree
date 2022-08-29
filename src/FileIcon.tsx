import { Component, Switch, Match } from "solid-js";

import { BsFiletypeJs } from "solid-icons/bs";
import { BsFiletypeCss } from "solid-icons/bs";
import { BsFiletypeHtml } from "solid-icons/bs";

export const FileIcons: Component<{ fileEx: string }> = (props) => {
  return (
    <Switch>
      <Match when={props.fileEx === "js"}>
        <BsFiletypeJs />
      </Match>
      <Match when={props.fileEx === "css"}>
        <BsFiletypeCss />
      </Match>
      <Match when={props.fileEx === "html"}>
        <BsFiletypeHtml />
      </Match>
    </Switch>
  );
};
