import { useMatchMedia } from "../../hooks/useMatchMedia";
import styled from "styled-components";
import { c } from "../styles";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  border-left: ${c.border};
  border-right: ${c.border};
  border-bottom: ${c.border};
`

export const ContentWrap = ({children}) => {
const {isMobile} = useMatchMedia();

  return (
    <StyledWrap isMobile={isMobile}>
      {children}
    </StyledWrap>
  )
}

export default ContentWrap;