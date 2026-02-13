import { NodeRender, NodeType } from "../ui/constants";
import { OptionsNode } from "./types";

const LENGTH_NON_SOURCE = 12;
let i = 0;

export const initialNodesPayload: OptionsNode = {
  nodeType: NodeType.OPTION,
  nodes: [
    {
      id: 1,
      label: "2026",
      nodeType: NodeRender.SOURCE,
      target: 0,
      position: {
        x: (150 + LENGTH_NON_SOURCE * 150) / 2,
        y: 0,
      },
    },
    {
      id: 2,
      label: "jan",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 3,
      label: "feb",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 4,
      label: "mar",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 5,
      label: "apr",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 6,
      label: "may",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 7,
      label: "jun",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 8,
      label: "jul",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 9,
      label: "aug",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 10,
      label: "sep",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 11,
      label: "oct",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 12,
      label: "nov",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
    {
      id: 13,
      label: "dec",
      nodeType: NodeRender.OPTION,
      target: 0,
      position: {
        x: (i += 1) * 150,
        y: -200,
      },
    },
  ],
};
