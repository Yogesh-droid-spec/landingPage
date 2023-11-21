import React from "react";
 import styled from "styled-components";
// Assets
import CodeIcon from "../../assets/svg/Services/CodeIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import CheckIcon from "../../assets/svg/Services/CheckIcon";
import SearchIcon from "../../assets/svg/Services/SearchIcon"
export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "code":
      getIcon = <CodeIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "check":
      getIcon = <CheckIcon />;
      break;
    case "search":
        getIcon = <SearchIcon />;
        break;
    default:
      getIcon = <CodeIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;