import styled from "styled-components";

export const SideContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 25%;
  height: 95vh;
  border: solid 2px #555976;
  border-radius: 20px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const SectionLabel = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
`;

export const ProfileCard = styled.div`
  margin-top: 7px;
  width: 100%;
  height: 20vh;
  border-radius: 10px;
`;

export const ProfilePic = styled.div`
  background: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ProfileName = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
`;

export const ProfileNowContainer = styled.div`
  background-color: rgba(60, 63, 88, 0.4);
  width: 60%;
  height: 150px;
  border-radius: 20px;
`;

export const ProfileNowLabel = styled.div`
  color: rgba(217, 217, 217);
  font-size: 1rem;
  font-weight: bold;
`;

export const ProfileNowTime = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  justify-content: center;
`;

export const DashedDivider = styled.div`
  height: 0px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: rgba(217, 217, 217, 0.3) 3px dashed;
`;
