import { useState, memo } from "react";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";
import { c } from "../styles";
import { Link } from "react-router-dom";
import { setAuth } from "../../store/signInSlice";
import BurgerMenu from "../ui/BurgerMenu";
import { GiHamburgerMenu as Menu } from "react-icons/gi";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: ${c.border};
  gap: 16px;

  .logo {
    margin: 0;
    font-family: ${c.font_title}; 
    font-size: 30px;
    color: ${c.clr_accent};
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: ${c.clr_accent_hover};
    }
  }

  .menu {
    width: 24px;
    height: 24px;
    margin: 0 0 0 auto;
  }

  nav {
    display: flex;

    ${props => props.isMobile && css`
      flex-direction: column;
      gap: 6px;
    `}

    ${props => !props.isMobile && css`
      align-items: center;
      gap: 36px;
      margin: 0 0 0 90px;
    `}
  }

  .link {
    font-family: ${c.font_title};
    color: inherit;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: ${c.clr_accent_hover};
    }

    &.exit {
      padding: 0;
      font-size: 16px;
      line-height: 1.5;
      background-color: inherit;
      border: none;
      cursor: pointer;
    }
  }

  .accessRow {
    display: flex;

    ${props => props.isMobile && css`
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      margin: 0 0 24px 0;
    `}

    ${props => !props.isMobile && css`
      align-items: center;
      gap: 16px;
      margin: 0 0 0 auto;
    `}
  }

  .menuOpen-enter {
    transform: translateX(100%);
  }
  .menuOpen-enter-active {
    transform: translateX(0);
    transition: transform 500ms ease;
    will-change: transform;
  }
  .menuOpen-enter-done {
    transform: translateX(0);
  }
  .menuOpen-exit {
    transform: translateX(0);
  }
  .menuOpen-exit-active {
    transform: translateX(100%);
    transition: transform 500ms ease;
    will-change: transform;
  }
`

export const Header = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const {isMobile} = useMatchMedia();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <StyledHeader isMobile={isMobile}>
      <Link className='logo' to='/'>MyFit</Link>
      {isMobile
        ? <>
            <Menu
              onClick={() => setMenuIsOpen(true)}
              className="menu"
            />

            <CSSTransition
              in={menuIsOpen}
              timeout={500}
              classNames='menuOpen'
            >
              <BurgerMenu
                menuIsOpen={menuIsOpen}
                setMenuIsOpen={setMenuIsOpen}
              >
                {auth
                  ? <div className="accessRow">
                      <button
                        onClick={() => dispatch(setAuth(false))}
                        className='link exit'
                      > Выйти
                      </button>
                    </div>
                  : <div className="accessRow">
                      <Link className='link' to='/signin'>Войти</Link>
                      <Link className='link' to='/signup'>Регистрация</Link>
                    </div>
                }
                <nav>
                  <Link className='link' to='/workouts/chest'>Тренировки</Link>
                  <Link className='link' to='/nutrition/breakfast'>О питании</Link>
                </nav>
                
              </BurgerMenu>
            </CSSTransition>
              
          </>
          
        : <>
            <nav>
              <Link className='link' to='/workouts/chest'>Тренировки</Link>
              <Link className='link' to='/nutrition/breakfast'>О питании</Link>
            </nav>
            <>
              {auth
                ? <div className="accessRow">
                    <button
                      onClick={() => dispatch(setAuth(false))}
                      className='link exit'
                    > Выйти
                    </button>
                  </div>
                : <div className="accessRow">
                    <Link className='link' to='/signin'>Войти</Link>
                    <Link className='link' to='/signup'>Регистрация</Link>
                  </div>
              }
            </>
          </>
      }
    </StyledHeader>
  )
}

export default memo(Header);