"use client";

import Sidebar from "../navigation/Sidebar";
import Row from "../ui/row";
import { HomeContainer } from "./styles";

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Row justify="flex-start">
        <Sidebar />
      </Row>
    </HomeContainer>
  );
};

export default HomePage;
