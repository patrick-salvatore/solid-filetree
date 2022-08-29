import { Component, createContext, For, Match, Switch, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";

import { Default } from "./utils/config";

import { File } from "./File";
import { Folder } from "./Folder";

import type { TreeNode, TreeProps } from "./types";

type TreeContext = {
  tree: TreeNode[];
  onNodeClick?: (n: TreeNode) => void;
  dispatch: SetStoreFunction<TreeNode[]>;
};

const TreeContext = createContext<TreeContext | undefined>(undefined);

export const useTreeContext = () => useContext(TreeContext);

const Tree: Component<TreeProps> = (props) => {
  const [tree, setTree] = createStore(props.data);

  return (
    <TreeContext.Provider
      value={{
        tree,
        dispatch: setTree,
        onNodeClick: (node) => props.onNodeClick?.(node),
      }}
    >
      <TreeRecusive parentNode={null} data={tree} />
    </TreeContext.Provider>
  );
};

const TreeRecusive: Component<{ data: TreeNode[]; parentNode: null | TreeNode }> = (props) => {
  return (
    <div class={`${Default.CSS_NAMESPACE}__tree-root`}>
      <For each={props.data}>
        {(node) => (
          <Switch>
            <Match when={!node.children}>
              <File file={node} />
            </Match>
            <Match when={true}>
              <Folder folder={node}>
                <TreeRecusive parentNode={node} data={node.children!} />
              </Folder>
            </Match>
          </Switch>
        )}
      </For>
    </div>
  );
};

export default Tree;
