import { useRef, memo } from "react";
import { useScrollbar } from "../../hooks/useScrollbar";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import styled from "styled-components";
import Container from "./Container";
import Header from "./Header";

const StyledPageWrapper = styled.div`
  max-height: calc(100vh);
  overflow-y: auto;
`

export const PageWrapper = ({children}) => {
  const {isMobile} = useMatchMedia();
  const wrapperRef = useRef();

  useScrollbar(wrapperRef, !isMobile);

  return (
    <StyledPageWrapper ref={wrapperRef}>
      <Container>
        <Header />
        {children}
      </Container>
    </StyledPageWrapper>
  )
}

export default memo(PageWrapper);