import { type NodeProps } from "@xyflow/react";
import {
  MiniatureContainer,
  MiniatureSource,
  NodeLabel,
  StyledNode,
} from "./styles";
import { BoardDisplay } from "./types";
import Column from "./column";

const BoardDisplayNode = ({ data }: NodeProps<BoardDisplay>) => {
  return (
    <StyledNode $height={150} $width={200}>
      <Column>
        <MiniatureContainer>
          <MiniatureSource $img={data.miniature}></MiniatureSource>
        </MiniatureContainer>
        <NodeLabel>{data.title}</NodeLabel>
      </Column>
    </StyledNode>
  );
};

export default BoardDisplayNode;
