export type TreeNode = {
  name: string;
  children?: TreeNode[];
};

export type TreeProps = {
  data: TreeNode[];
  onNodeClick?: (n: TreeNode) => void;
};
