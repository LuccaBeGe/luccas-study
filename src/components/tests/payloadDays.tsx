import { NodeRender, NodeType } from "../ui/constants";
import { GlobalNode } from "./types";

const LENGTH_NON_SOURCE = 14;
let i = 0;

export const daysNodesPayload: GlobalNode[] = [
  {
    id: 1,
    label: "04/2026",
    nodeRender: NodeRender.SOURCE,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (150 + LENGTH_NON_SOURCE * 150) / 2,
      y: 0,
    },
  },
  {
    id: 2,
    label: "1",
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
    label: "2",
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
    label: "3",
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
    label: "4",
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
    label: "5",
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
    label: "6",
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
    label: "7",
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
    label: "8",
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
    label: "9",
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
    label: "10",
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
    label: "11",
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
    label: "12",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 14,
    label: "13",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
  {
    id: 15,
    label: "14",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (i += 1) * 150,
      y: -200,
    },
  },
];
