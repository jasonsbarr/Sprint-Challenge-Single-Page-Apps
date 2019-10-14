import { Link } from "react-router-dom";
import styled from "styled-components";

const TextButton = styled(Link)`
  border: 1px solid dodgerblue;
  border-radius: 3px;
  color: dodgerblue;
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: dodgerblue;
    box-shadow: 2px 4px 3px rgba(30, 144, 255, 0.5);
    color: white;
    font-size: 17px;
    transform: translateY(-4px);
  }

  &:active {
    box-shadow: 1px 2px 1.5px rgba(30, 144, 255, 0.8);
    font-size: 16px;
    transform: translateY(-2px);
  }

  ${props => props.inactive && `position: relative; right: -9999px`}
`;

export default TextButton;
