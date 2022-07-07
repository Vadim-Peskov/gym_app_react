import styled from "styled-components";
import { c } from "../styles";
import bgTitle from "../../images/bg_video_title.jpg";
import PlayButton from "../ui/PlayButton";

const StyledVideoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${c.clr_additional};
  cursor: pointer;

  &:hover .playButton {
    transform: scale(1.1);
  }

  .imgContainer {
    position: relative;
    padding-bottom: 58%;
    background-color: #fff;

    img {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin: 0;
    padding: 12px 14px;
    font-size: 15px;
    background-image: url(${bgTitle});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

`

export const VideoCard = ({title, videoId, ...props}) => {
  return (
    <StyledVideoCard {...props}>
      <div className="imgContainer">
        <img
          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
        />
        <PlayButton />
      </div>
      <p>{title}</p>
    </StyledVideoCard>
  )
}

export default VideoCard;