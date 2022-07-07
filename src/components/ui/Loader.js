import styled from "styled-components";
import { c } from "../styles";
import { BiLoaderAlt as LoaderIco } from "react-icons/bi";

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  
  .loaderIco {
    width: 22px;
    height: 22px;
    animation: rotate 1s linear infinite;

    ${c.animation_rotate};
  }

  p {
    margin: 0 0 0 8px;
    font-family: ${c.font_title};
    font-size: 20px;
  }
`


export const Loader = () => {
  return (
    <StyledLoader className="loader">
      <LoaderIco className="loaderIco"/>
      <p>Загрузка...</p>
    </StyledLoader>
  )
}

export default Loader;