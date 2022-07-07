import styled from "styled-components";
import { Link } from "react-router-dom";
import {c} from '../styles';
import BgButton from '../../images/bg_button.jpg';

const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 170px;
  min-height: 52px;
  padding: 10px;
  font-family: ${c.font_text};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: inherit;
  background-color: ${c.clr_accent};
  background-image: url(${BgButton});
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(164, 55, 0, 0.3);
    transition: 0.2s;
  }

  &:hover::after {
    background-color: rgba(240, 72, 0, 0.35);
    transition: 0.2s;
  }

  &:disabled {
    pointer-events: none;
  }

  &:disabled::after {
    background-color: rgba(7, 3, 1, 0.35);
  }

  span {
    z-index: 10;
    color: ${c.clr_second};
  }
`

export const Button = ({text, to, disabled, ...props}) => {
  return (
    <>
      {to && !disabled
        ? <Link to={to} style={{textDecoration: 'none'}}>
            <StyledButton {...props}>
              <span>{text}</span>
            </StyledButton>
          </Link>
        : <StyledButton disabled={disabled} {...props}>
            <span>{text}</span>
          </StyledButton>
      }
    </>
  )
}

export default Button;