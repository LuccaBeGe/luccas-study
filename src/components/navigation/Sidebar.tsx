import { useRouter } from "next/navigation";
import ClickableSpan from "../ui/clickSpan";
import Column from "../ui/column";
import Row from "../ui/row";
import { applicationActions, personalActions } from "./constants";
import "./gradient.css";
import {
  DashedDivider,
  ProfileCard,
  ProfileName,
  ProfileNowContainer,
  ProfileNowLabel,
  ProfileNowTime,
  ProfilePic,
  SectionLabel,
  SideContainer,
} from "./styles";

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <SideContainer>
      <Column
        align="flex-start"
        gap={5}
        paddingLeft={15}
        paddingTop={15}
        paddingRight={15}
      >
        <SectionLabel>WELCOME LUCCA</SectionLabel>
        <ProfileCard className="gradient">
          <Row
            justify="space-between"
            paddingLeft={10}
            paddingRight={20}
            paddingTop={10}
            paddingBottom={5}
            gap={15}
          >
            <Column align="center" gap={5}>
              <ProfilePic></ProfilePic>
              <ProfileName>
                Lucca
                <br />
                Brusque
              </ProfileName>
            </Column>
            <ProfileNowContainer>
              <Column align="flex-start" gap={15}>
                <Row paddingTop={10} paddingLeft={15}>
                  <ProfileNowLabel>Now</ProfileNowLabel>
                </Row>
                <ProfileNowTime>
                  26/01/2026
                  <br />
                  10:53:32
                </ProfileNowTime>
              </Column>
            </ProfileNowContainer>
          </Row>
        </ProfileCard>
        <DashedDivider></DashedDivider>
        {personalActions.map((opt, i) => (
          <ClickableSpan
            label={opt.label}
            icon={opt.icon}
            onClick={() => {}}
            scale={1.1}
            key={i}
          />
        ))}
        <SectionLabel style={{ marginTop: "25px", marginBottom: "15px" }}>
          ACTIONS
        </SectionLabel>
        {applicationActions.map((opt, i) => (
          <ClickableSpan
            label={opt.label}
            icon={opt.icon}
            onClick={() => router.push(opt.url ? opt.url : "/")}
            scale={1.4}
            key={i}
          />
        ))}
      </Column>
    </SideContainer>
  );
};

export default Sidebar;
