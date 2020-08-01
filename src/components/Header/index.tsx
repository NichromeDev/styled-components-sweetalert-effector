import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { rem } from "polished";
import {
  linkPath1,
  linkPath2,
  linkPath3,
  linkName1,
  linkName2,
  linkName3,
  activeClassName,
  primaryColor,
  secondaryColor,
  opacityDesign,
  linkFont,
  headerHeight,
} from "../../variables";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${headerHeight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLinkStyled = styled(NavLink)`
  opacity: 1;
  color: ${primaryColor};
  text-decoration: none;
  font-size: ${rem(linkFont)};
`;

const StyledLink = styled(NavLinkStyled).attrs({ activeClassName })`
  &.${activeClassName} {
    opacity: ${opacityDesign};
    color: ${secondaryColor};
  }
`;

export default (): JSX.Element => (
  <Header>
    <StyledLink exact to={linkPath1}>
      {linkName1}
    </StyledLink>
    <StyledLink exact to={linkPath2}>
      {linkName2}
    </StyledLink>
    <StyledLink exact to={linkPath3}>
      {linkName3}
    </StyledLink>
  </Header>
);
