import { useDispatch } from "react-redux";
import styled from "styled-components";
import { c } from "../styles";

const StyledFormAlert = styled.div`
  position: absolute;
  bottom: 6px;
  left: 0;
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: ${c.clr_accent};
`

export const FormAlert = ({alert, setAlert}) => {
  const dispatch = useDispatch();
  if (alert) {
    setTimeout(() => dispatch(setAlert(null)) , 1200)
  }

  return (
    <StyledFormAlert>
      {alert}
    </StyledFormAlert>
  )
}

export default FormAlert;