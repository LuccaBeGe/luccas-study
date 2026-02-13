import { NodeRender, NodeType } from "../ui/constants";
import { OptionsNode } from "./types";

const LENGTH_NON_SOURCE = 15;
let i = 0;

export const daysPaginatedNodesPayload: OptionsNode = {
  nodeType: NodeType.OPTION,
  nodes: [
    {
      id: 1,
      label: "04/2026",
      nodeType: NodeRender.SOURCE,
      target: 0,
      position: {
        x: (150 + LENGTH_NON_SOURCE * 150) / 2,
        y: 0,
      },
    },
    {
      id: 2,
      label: "1",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 3,
      label: "2",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 4,
      label: "3",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 5,
      label: "4",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 6,
      label: "5",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 7,
      label: "6",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 8,
      label: "7",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 9,
      label: "8",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 10,
      label: "9",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 11,
      label: "10",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 12,
      label: "11",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 13,
      label: "12",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 14,
      label: "13",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 15,
      label: "14",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 16,
      label: "15",
      nodeType: NodeRender.CONNECTOR,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 17,
      label: "...",
      nodeType: NodeRender.PAGINATED,
      target: 0,
      position: {
        x: (150 + LENGTH_NON_SOURCE * 150) / 2,
        y: -400,
      },
    },
  ],
};
