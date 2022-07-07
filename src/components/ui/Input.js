import { memo } from "react";
import styled from "styled-components";
import { c } from "../styles";

const StyledInput = styled.input`
  width: 100%;
  min-width: 240px;
  margin: ${props => props.isError ? '0 0 12px 0' : '0 0 20px 0'};
  padding: 12px 14px;
  color: inherit;
  background-color: transparent;
  border: 2px solid ${c.clr_accent_op25};
  transition: 0.2s;

  &:focus {
    outline: none;
    border: 2px solid ${c.clr_accent_hover};
  }

  & + p {
    margin: 0 0 24px 0;
    font-size: 16px;
    color: ${c.clr_accent};
  }
`

export const Input = ({type='text', isError, errorText, ...props}) => {
  return (
    <div className="inputWrap">
      <StyledInput
        type={type}
        isError={isError}
        {...props}
      />
      {isError && <p>{errorText}</p>}
    </div>
  )
}

export default memo(Input);