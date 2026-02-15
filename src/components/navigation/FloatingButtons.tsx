import { NavButton, NavButtonContainer } from "./styles";
import { FloatingOptions } from "./types";

interface Props {
  options: FloatingOptions[];
}
const FloatingButtons: React.FC<Props> = ({ options }) => {
  return (
    <NavButtonContainer>
      {options.map((opt, index) => (
        <NavButton key={index}>{opt.label}</NavButton>
      ))}
    </NavButtonContainer>
  );
};

export default FloatingButtons;
