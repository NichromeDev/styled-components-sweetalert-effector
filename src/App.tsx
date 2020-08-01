import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Routes from "./Routes";
import { Header } from "./components";

import { xxl, padding, headerHeight } from "./variables";

const Wrapper = styled.section`
  padding: ${padding};
  padding-top: calc(${padding} + ${headerHeight})
  max-width: ${xxl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default (): JSX.Element => {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Wrapper>
  );
};
