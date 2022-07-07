import { useMatchMedia } from "../../hooks/useMatchMedia";
import styled, { css } from "styled-components";

const StyledNutritionItem = styled.div`
  display: flex;
  gap: 18px;
  min-height: 140px;

  .wrap {
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0 0 10px 0;
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
    }

    p {
      margin: 0;
    }
  }
`

const StyledImgContainer = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
    flex: 0 0 auto;
    position: relative;
    background-color: grey;
  }

  ${props => props.isTablet && css`
    width: 100px;
    height: 100px;
  `}

  ${props => props.isDesktop && css`
    width: 160px;
    height: 160px;
  `}

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const NutritionItem = ({title, img, text, ...props}) => {
  const {isTablet, isDesktop} = useMatchMedia();

  return (
    <StyledNutritionItem {...props}>
      <StyledImgContainer
        className="imgContainer"
        isTablet={isTablet}
        isDesktop={isDesktop}
      >
        <img src={img} alt={title} />
      </StyledImgContainer>
      <div className="wrap">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </StyledNutritionItem>
  )
}

export default NutritionItem;