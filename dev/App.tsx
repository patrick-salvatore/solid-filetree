import { Tree } from "solid-filetree";
import "solid-filetree/styles/main.scss";

import "./styles.css";

const structure = [
  {
    name: "client",
    children: [
      {
        name: "ui",
        children: [
          { name: "Toggle.js" },
          { name: "Button.js" },
          { name: "Button.style.js" },
          { name: "index.html" },
          { name: "style.css" },
        ],
      },
      {
        name: "components",
        children: [{ name: "Tree.js" }, { name: "Tree.style.js" }],
      },
      { name: "setup.js" },
      { name: "setupTests.js" },
    ],
  },
  {
    name: "packages",
    children: [
      {
        name: "main.js",
      },
    ],
  },
  { name: "index.js" },
];

export default () => (
  <div class="body">
    <span style="text-decoration:underline;font-weight:bold">File Tree</span>
    <div class="tree">
      <Tree data={structure} />
    </div>
  </div>
);
