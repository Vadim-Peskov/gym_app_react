import styled from "styled-components";
import { c } from "../styles";
import CloseButton from "./CloseButton";

const StyledBurgerMenu = styled.div`
  position: absolute;
  z-index: 50;
  content: "";
  right: -20px;
  top: 0px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 20px 20px 40px 20px;
  background-color: ${c.clr_bg};
  transform: ${props => props.menuIsOpen ? 'translateX(0)' : 'translateX(100%)'};

  .closeIco {
    position: absolute;
    top: 20px;
    right: 16px;
    width: 26px;
    height: 26px;
    color: ${c.clr_accent_op25};
    cursor: pointer;
    transition: 0.2s;
  }
`

export const BurgerMenu = ({children, menuIsOpen, setMenuIsOpen}) => {

  return (
    <StyledBurgerMenu
      className="menuOpen"
      menuIsOpen={menuIsOpen}  
    >
      <CloseButton onClick={() => setMenuIsOpen(false)}/>
      {children}
    </StyledBurgerMenu>  
  )
}

export default BurgerMenu;