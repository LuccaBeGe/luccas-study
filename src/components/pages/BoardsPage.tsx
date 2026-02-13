"use client";

import "@xyflow/react/dist/base.css";
import { daysPaginatedNodesPayload } from "../tests/payloadDaysPaginated";
import RenderOptionsNode from "../navigation/RenderOptionsNodes";

const BoardsPage: React.FC = () => {
  return <RenderOptionsNode renderingNodes={daysPaginatedNodesPayload} />;
};

export default BoardsPage;
