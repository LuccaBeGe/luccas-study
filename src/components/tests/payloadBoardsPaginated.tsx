import { NodeRender, NodeType } from "../ui/constants";
import { GlobalNode } from "./types";

const LENGTH_NON_SOURCE = 5;
let i = 0;

const BoardsPayloadPaginated: GlobalNode[] = [
  {
    id: 1,
    label: "09/04/2026",
    nodeRender: NodeRender.SOURCE,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (250 + LENGTH_NON_SOURCE * 250) / 2,
      y: 0,
    },
  },
  {
    id: 2,
    label: "Board 1",
    nodeRender: NodeRender.CONNECTOR,
    nodeType: NodeType.BOARD,
    target: 0,
    miniature: "#00ff00",
    tags: ["#0000ff", "#ffff00"],
    position: {
      x: (i += 1) * 250,
      y: -300,
    },
  },
  {
    id: 3,
    label: "Board 2",
    nodeRender: NodeRender.CONNECTOR,
    nodeType: NodeType.BOARD,
    target: 0,
    miniature: "#ff0000",
    tags: ["#00ffff"],
    position: {
      x: (i += 1) * 250,
      y: -300,
    },
  },
  {
    id: 4,
    label: "Board 3",
    nodeRender: NodeRender.CONNECTOR,
    nodeType: NodeType.BOARD,
    target: 0,
    miniature: "#0000ff",
    tags: ["#ff00ff", "#00ff00", "#ffff00", "#ff8800"],
    position: {
      x: (i += 1) * 250,
      y: -300,
    },
  },
  {
    id: 5,
    label: "Board 4",
    nodeRender: NodeRender.CONNECTOR,
    nodeType: NodeType.BOARD,
    target: 0,
    miniature: "#ffff00",
    tags: ["#ff00ff", "#008000", "#00ffff", "#ff0000", "#0000ff"],
    position: {
      x: (i += 1) * 250,
      y: -300,
    },
  },
  {
    id: 6,
    label: "Board 5",
    nodeRender: NodeRender.CONNECTOR,
    nodeType: NodeType.BOARD,
    target: 0,
    miniature: "#ff00ff",
    tags: ["#ff8800", "#00ff00"],
    position: {
      x: (i += 1) * 250,
      y: -300,
    },
  },
  {
    id: 7,
    label: "...",
    nodeRender: NodeRender.OPTION,
    nodeType: NodeType.OPTION,
    target: 0,
    position: {
      x: (250 + LENGTH_NON_SOURCE * 250) / 2,
      y: -500,
    },
  },
];

export default BoardsPayloadPaginated;
