import { NodeRender, NodeType } from "../ui/constants";
import { GlobalNode } from "./types";

const LENGTH_NON_SOURCE = 12;
let i = 0;

export const initialNodesPayload: GlobalNode[] = [
  {
    id: 1,
    label: "2026",
    nodeRender: NodeRender.SOURCE,
    nodeType: NodeType.BOARD,
    target: 0,
    position: {
      x: (150 + LENGTH_NON_SOURCE * 150) / 2,
      y: 0,
    },
  },
  {
    id: 2,
    label: "jan",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 3,
    label: "feb",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 4,
    label: "mar",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 5,
    label: "apr",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 6,
    label: "may",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 7,
    label: "jun",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 8,
    label: "jul",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 9,
    label: "aug",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 10,
    label: "sep",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 11,
    label: "oct",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 12,
    label: "nov",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 13,
    label: "dec",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
];
