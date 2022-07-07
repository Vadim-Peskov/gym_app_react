import { useMatchMedia } from "../../hooks/useMatchMedia";
import styled from "styled-components";
import { c } from "../styles";
import Button from "../ui/Button";
import CloseButton from "../ui/CloseButton";
import { BiLoaderAlt as LoaderIco } from "react-icons/bi";
import FormAlert from "./FormAlert";

const StyledForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.isMobile ? '40px 0 0 0' : '80px 0 0 0'};
`

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.isMobile ? '100%' : 'auto'};
  padding: ${props => props.isMobile ? '40px' : '50px 100px 50px 100px'};
  background-color: ${c.clr_additional};
  border: 2px solid ${c.clr_accent_op25};

  .inputWrap:last-of-type {
    margin: 0 0 12px 0;
  }

  h2 {
    font-family: ${c.font_title};
    font-weight: 400;
    margin: 0 0 24px 0;
  }

  .formLoading {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    svg {
      animation: rotate 1s linear infinite;
      ${c.animation_rotate};
    }
  }
`

export const FormWrap = ({children, title, handleSubmit, isValid, buttonText, dirty, status, alert, setAlert}) => {
  const {isMobile} = useMatchMedia();

  return (
    <StyledForm isMobile={isMobile}>
      <StyledContainer isMobile={isMobile}>
        <CloseButton to="/" />
        <h2>{title}</h2>
        {children}
        <Button
          onClick={handleSubmit}
          disabled={!isValid || !dirty || status === 'loading'}
          type='submit'
          text={
            status === 'loading'
              ? <div className="formLoading">
                  <LoaderIco />Загрузка...
                </div>
              : buttonText
            }
        />
      </StyledContainer>
      {alert && <FormAlert alert={alert} setAlert={setAlert}/>}
    </StyledForm>
  )
}

export default FormWrap;