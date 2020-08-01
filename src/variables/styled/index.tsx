import styled from "styled-components";

import {
  primaryColor,
  secondaryColor,
  borderWidth,
  inputBackground,
  borderRadius,
} from "..";
import { marginBottomMixin } from "./mixins";

export const H1 = styled.h1`
  color: ${primaryColor};
  ${marginBottomMixin}
`;

export const H2 = styled.h2`
  color: ${primaryColor};
  ${marginBottomMixin}
`;

export const Button = styled.button`
  background: ${secondaryColor};
  color: white;
  cursor: pointer;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${borderWidth} solid ${secondaryColor};
  border-radius: 3px;
  ${marginBottomMixin}
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${primaryColor};
  background: ${inputBackground};
  border: none;
  border-radius: ${borderRadius};
  ${marginBottomMixin}
`;
