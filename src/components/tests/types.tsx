import { NodeRender, NodeType } from "../ui/constants";

interface OptionsNodeInfo {
  id: number;
  target: number;
  label: string;
  nodeType: NodeRender;
  position: {
    x: number;
    y: number;
  };
}

interface BoardNodeInfo {
  id: number;
  target: number;
  title: string;
  nodeType: NodeRender;
  miniature: string;
  tags: string[];
}

export interface OptionsNode {
  nodeType: NodeType;
  nodes: OptionsNodeInfo[];
}

export interface BoardsNode {
  nodeType: NodeType;
  dateNode: OptionsNodeInfo;
  nodes: BoardNodeInfo[];
}
