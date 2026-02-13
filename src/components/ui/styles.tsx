import { Handle } from "@xyflow/react";
import styled from "styled-components";

export const Icon = styled.div<{
  $size: number;
  $scale: number;
}>`
  font-size: ${(props) => props.$size * props.$scale}em;
  color: #a4a8c1;
  display: flex;
`;

export const CustomizableDiv = styled.div<{
  $paddingLeft?: number;
  $paddingRight?: number;
  $paddingTop?: number;
  $paddingBottom?: number;
  $direction: string;
  $alignment?: string;
  $justify?: string;
  $gap?: number;
  $percentHeight?: number;
}>`
  display: flex;
  align-items: ${(props) => props.$alignment || "center"};
  justify-content: ${(props) => props.$justify || "center"};

  padding-left: ${(props) => props.$paddingLeft}px;
  padding-right: ${(props) => props.$paddingRight}px;
  padding-top: ${(props) => props.$paddingTop}px;
  padding-bottom: ${(props) => props.$paddingBottom}px;
  gap: ${(props) => props.$gap + "px" || "5px"};
  flex: 1;
  height: ${(props) => props.$percentHeight}%;
  flex-direction: ${(props) => props.$direction || "row"};
`;

export const CardDiv = styled.div`
  flex: 1;
  padding: 5px;
  font-size: 50px;
  background-color: #f59923;
`;

export const SpanContainener = styled.div<{ $scale: number }>`
  width: 100%;
  height: ${(props) => props.$scale * 40}px;
  border-radius: 5px;
  background: transparent;

  &:hover {
    background: rgba(164, 168, 193, 0.2);
  }
`;

export const SpanLabel = styled.div<{ $scale: number }>`
  color: rgba(212, 225, 203, 0.8);
  font-weight: 500;
  font-size: ${(props) => props.$scale * 1}rem;
`;

export const StyledNode = styled.div<{ $height: number; $width: number }>`
  border: solid 3px #555976;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const MiniatureContainer = styled.div`
  margin: 10px;
  width: 70%;
  height: 150px;
`;

export const MiniatureSource = styled.div<{ $img: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$img};
`;

export const NodeLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  height: 100%;
  width: 100%;
  color: rgba(212, 225, 203, 0.8);
  font-weight: bold;
`;

export const StyledHandle = styled(Handle)`
  background: none;
  border: none;
  width: 1em;
  height: 1em;
`;

export const HandleIcon = styled.div`
  position: absolute;
  font-size: 1rem;
  color: #555976;
`;
