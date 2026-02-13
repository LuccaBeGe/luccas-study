import Row from "./row";
import { Icon, SpanLabel, SpanContainener } from "./styles";

interface Props {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  scale?: number;
}

const ClickableSpan: React.FC<Props> = ({
  label,
  icon,
  onClick,
  scale = 1,
}) => {
  return (
    <SpanContainener onClick={onClick} $scale={scale}>
      <Row justify="flex-start" gap={15} paddingLeft={20} percenteHeight={100}>
        {icon ? (
          <Icon $scale={scale} $size={1}>
            {icon}
          </Icon>
        ) : (
          <></>
        )}
        <SpanLabel $scale={scale}>{label}</SpanLabel>
      </Row>
    </SpanContainener>
  );
};

export default ClickableSpan;
