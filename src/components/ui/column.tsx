import { CustomizableDiv } from "./styles";
import { AlignItems, JustifyContent } from "./types";

interface Props {
  children: React.ReactNode;
  paddingRight?: number;
  paddingLeft?: number;
  paddingTop?: number;
  paddingBottom?: number;
  align?: AlignItems;
  justify?: JustifyContent;
  gap?: number;
  percentHeight?: number;
}

const Column: React.FC<Props> = ({
  children,
  align,
  justify,
  gap,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  percentHeight,
}) => {
  return (
    <CustomizableDiv
      $paddingRight={paddingRight}
      $paddingLeft={paddingLeft}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $alignment={align}
      $justify={justify}
      $gap={gap}
      $percentHeight={percentHeight}
      $direction={"column"}
    >
      {children}
    </CustomizableDiv>
  );
};

export default Column;
