import { Position, type NodeProps } from "@xyflow/react";
import { HandleIcon, NodeLabel, StyledHandle, StyledNode } from "./styles";
import { FaCircleDot } from "react-icons/fa6";
import { NodeRender } from "./constants";
import { OptionNode } from "./types";

const OptionDisplayNode = ({ data }: NodeProps<OptionNode>) => {
  return (
    <StyledNode $height={60} $width={100}>
      <NodeLabel>{data.label}</NodeLabel>
      {data.nodeRender === NodeRender.SOURCE ? (
        <StyledHandle
          type="target"
          position={Position.Top}
          style={{ pointerEvents: "none" }}
        >
          <HandleIcon style={{ top: -10 }}>
            <FaCircleDot />
          </HandleIcon>
        </StyledHandle>
      ) : data.nodeRender === NodeRender.CONNECTOR ? (
        <>
          <StyledHandle
            type="target"
            position={Position.Top}
            style={{ pointerEvents: "none" }}
          >
            <HandleIcon style={{ top: -10 }}>
              <FaCircleDot />
            </HandleIcon>
          </StyledHandle>
          <StyledHandle
            type="source"
            position={Position.Bottom}
            style={{ pointerEvents: "none" }}
          >
            <HandleIcon style={{ bottom: -13 }}>
              <FaCircleDot />
            </HandleIcon>
          </StyledHandle>
        </>
      ) : (
        <StyledHandle
          type="source"
          position={Position.Bottom}
          style={{ pointerEvents: "none" }}
        >
          <HandleIcon style={{ bottom: -13 }}>
            <FaCircleDot />
          </HandleIcon>
        </StyledHandle>
      )}
    </StyledNode>
  );
};

export default OptionDisplayNode;
