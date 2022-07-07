import styled from "styled-components";
import { c } from "../styles";
import { MdPlayArrow as PlayTriangle } from 'react-icons/md';

const StyledPlayButton = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(50% - 22px);
  left: calc(50% - 22px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${c.clr_additional};
  border: 2px solid ${c.clr_accent_op25};
  pointer-events: none;
  transition: transform 0.2s ease;

  svg {
    width: 22px;
    height: 22px;
    color: ${c.clr_accent};
  }
`

export const PlayButton = () => {
  return (
    <StyledPlayButton className="playButton">
      <PlayTriangle />
    </StyledPlayButton>
  )
}

export default PlayButton;