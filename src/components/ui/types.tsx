import type { Node } from "@xyflow/react";
export type AlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type OptionNode = Node<
  { nodeRender: number; label: string },
  "option_node"
>;

export type BoardDisplay = Node<
  {
    title: string;
    miniature: string;
    tags: string[];
  },
  "board-node"
>;
