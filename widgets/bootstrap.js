import styled, { css, keyframes } from "styled-components";
import { colors, spacing } from "../widgets/theme";

// import {
//   Ui,
//   Sidebar,  
//   SidebarItem,  
//   Main,  
//   Label,  
//   Input,  
//   Paragraph,
//   Word,
//   Touchable,
//   TouchableLink,
//   LinkUnderline
// } from "../widgets/bootstrap";

export const Paragraph = styled.p.attrs({
  color: props => props.tint || colors.txt
})`
  color: ${props => props.tint};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
  ${props => props.vertical && css`writing-mode: vertical-lr;`};
  ${props =>
    props.elipsis &&
    css`
      max-width: 100%;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
      word-wrap: normal !important;
    `};
`;

export const Word = Paragraph.withComponent("span");

const fadeIn = keyframes`
      0% {
      opacity: 0;
      }
      100% {
      opacity: 1;
      }
  `;

export const Touchable = styled.button`
  animation: 1s ${fadeIn} ease-out;
  cursor: pointer;
  touch-action: manipulation;
  appearance: none;
  background-color: #ddd;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 1rem;

  & > * {
    pointer-events: none;
  }
  ${props => props.pressed && css`background-color: red;`};
`;

export const Link = Touchable.withComponent("a");
export const LinkUnderline = Link.extend`text-decoration: underline;`;

