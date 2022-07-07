import { useMatchMedia } from "../../hooks/useMatchMedia";
import styled, { css } from "styled-components";
import { c } from "../styles";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

const StyledAside = styled.ul`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'row' : 'column'};
  gap: ${props => props.isMobile ? '28px' : '8px'};
  margin: 0;
  padding: ${props => props.isMobile ? '30px 24px 0 24px' : '30px 24px'};
  border-right: ${c.border};

  ${props => props.isTablet && css`
    flex: 0 0 160px;
  `}

  ${props => props.isDesktop && css`
    flex: 0 0 200px;
  `}

  li {
    align-self: flex-start;
    font-family: ${c.font_title};
    color: inherit;
    list-style: none;
    cursor: pointer;
    transition: 0.2s;

    &.active {
      color: ${c.clr_accent};
    }

    &:hover {
      color: ${c.clr_accent_hover};
    }
  }
`

export const Aside = ({keys}) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const {isMobile, isTablet, isDesktop} = useMatchMedia();

  const pathName = useMemo(() => {
    const locationArr = location.pathname.split('/');
    locationArr.pop();
    const newLocation = locationArr.join('/') + '/';
    return newLocation;
  }, [location.pathname])

  return (
    <StyledAside
      isMobile={isMobile}
      isTablet={isTablet}
      isDesktop={isDesktop}
    >
      {keys.map(i =>
        <li
          onClick={() => navigate(`${pathName + i[0]}`)}
          className={i[0] === Object.values(params)[0] ? 'active' : undefined}
          key={i[0]}
        >
          {i[1]}
        </li>
      )}
    </StyledAside>
  )
}

export default Aside;