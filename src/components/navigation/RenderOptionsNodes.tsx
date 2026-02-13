"use client";

import { useState } from "react";
import "@xyflow/react/dist/base.css";
import { ReactFlow } from "@xyflow/react";
import { BoardsContainer } from "../pages/styles";
import { OptionsNode } from "../tests/types";
import OptionDisplayNode from "../ui/optionNode";
import { OptionNode } from "../ui/types";

interface Props {
  renderingNodes: OptionsNode;
}

const RenderOptionsNode: React.FC<Props> = ({ renderingNodes }) => {
  const nodeTypes = { option_node: OptionDisplayNode };

  const toRenderNodes: OptionNode[] = renderingNodes.nodes.map((n) => ({
    id: n.id.toString(),
    type: "option_node",
    data: {
      label: n.label,
      nodeRender: n.nodeType,
    },
    position: {
      x: n.position.x,
      y: n.position.y,
    },
  }));

  const [nodes, setNodes] = useState<OptionNode[]>(toRenderNodes);

  return (
    <BoardsContainer>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView />
    </BoardsContainer>
  );
};

export default RenderOptionsNode;
