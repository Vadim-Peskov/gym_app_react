import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { c } from "../styles";
import { GoX as Ico } from "react-icons/go";

const StyledCloseButton = styled.div`
  .closeIco {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 26px;
    height: 26px;
    color: ${c.clr_accent_op25};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${c.clr_accent_hover};
    }
  }
`

export const CloseButton = ({to, ...props}) => {
  const navigate = useNavigate();

  return (
    <StyledCloseButton>
      <Ico
        onClick={() => {to && navigate(to)}}
        className='closeIco'
        {...props}
      />
    </StyledCloseButton>
  )
}

export default CloseButton;