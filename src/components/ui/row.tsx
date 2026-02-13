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
  percenteHeight?: number;
}

const Row: React.FC<Props> = ({
  children,
  align,
  justify,
  gap,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  percenteHeight,
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
      $percentHeight={percenteHeight}
      $direction="row"
    >
      {children}
    </CustomizableDiv>
  );
};

export default Row;
