import styled from "styled-components";
import { c } from "../styles";
import YouTube from "react-youtube";
import Loader from "../ui/Loader";
import CloseButton from "../ui/CloseButton";

const StyledVideoPlayer = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 23, 20, 0.8);

  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 20px 20px 20px;
  }

  .videoContainer {
    position: relative;
    display: flex;
    width: 100%;
    padding-bottom: 58%;
    background-color: ${c.clr_additional};

    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .closeIco {
    z-index: 30;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    padding: 4px;
    background-color: ${c.clr_additional};
    color: ${c.clr_accent_op25};
  }
`
const styledYoutube = {
  zIndex: '20',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%'
}

const youtubeOptions = {
  width: '100%',
  height: '100%',
  playerVars: {
    autoplay: 1,
  }
}

export const VideoPlayer = ({openVideoId, setOpenVideoId}) => {
  return (
    <StyledVideoPlayer>
      <div className="wrap">
        <div className="videoContainer">
          <CloseButton onClick={() => setOpenVideoId(false)}/>
          <Loader />
          <YouTube
            videoId={openVideoId}
            opts={youtubeOptions}
            style={styledYoutube}
          />
        </div>
      </div>
    </StyledVideoPlayer>
  )
}

export default VideoPlayer;