import type { Component } from "solid-js";

import { FileIcons } from "./FileIcon";

import { Default } from "./utils/config";

import type { TreeNode } from "./types";

export const File: Component<{ file: TreeNode }> = (props) => {
  const parts = props.file.name.split(".");
  const fileEx = parts[parts.length - 1];

  return (
    <div class={`${Default.CSS_NAMESPACE}__file-root`}>
      <div class={`${Default.CSS_NAMESPACE}__file-name`}>
        <FileIcons fileEx={fileEx} />
        <div class={`${Default.CSS_NAMESPACE}__file-name-text`}>{props.file.name}</div>
      </div>
    </div>
  );
};
