import { NodeRender, NodeType } from "../ui/constants";

export interface GlobalNode {
  id: number;
  target: number;
  label: string;
  nodeRender: NodeRender;
  nodeType: NodeType;
  position: {
    x: number;
    y: number;
  };
  miniature?: string;
  tags?: string[];
}
