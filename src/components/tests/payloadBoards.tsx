import { NodeRender, NodeType } from "../ui/constants";
import { BoardsNode } from "./types";

const LENGTH_NON_SOURCE = 5;
let i = 0;

const BoardsPayload: BoardsNode = {
  nodeType: NodeType.BOARD,
  dateNode: {
    id: 1,
    label: "07/04/2026",
    nodeType: NodeRender.SOURCE,
    target: 0,
    position: {
      x: (250 + LENGTH_NON_SOURCE * 250) / 2,
      y: -200,
    },
  },
};
