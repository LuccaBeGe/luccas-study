"use client";

import "@xyflow/react/dist/base.css";
import { daysPaginatedNodesPayload } from "../tests/payloadDaysPaginated";
import RenderOptionsNode from "../navigation/RenderOptionsNodes";
import { OptionNode, BoardNode } from "../ui/types";
import { initialNodesPayload } from "../tests/payloadInitialNodes";
import { GlobalNode } from "../tests/types";

const BoardsPage: React.FC = () => {
  const createRenderElement: OptionNode | BoardNode = (node: GlobalNode) => {};

  return <RenderOptionsNode renderingNodes={daysPaginatedNodesPayload} />;
};

export default BoardsPage;
