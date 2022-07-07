import styled from "styled-components";
import { c } from "../styles";
import Button from "../ui/Button";

const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 100px 20px;

  h2 {
    margin: 0 0 36px 0;
    font-family: ${c.font_title};
    font-size: 40px;
    font-weight: 400;
    line-height: 1.1;
  }
`

export const ErrorMessage = () => {
  return (
    <StyledErrorMessage>
      <h2>Ошибка загрузки</h2>
      <Button to='/' text='На главную'/>
    </StyledErrorMessage>
  )
}

export default ErrorMessage;