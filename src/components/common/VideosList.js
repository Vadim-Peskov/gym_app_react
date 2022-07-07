import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import styled, { css } from "styled-components";
import VideoCard from "./VideoCard";

import VideoPlayer from "./VideoPlayer";

const StyledVideosList = styled.div`
  display: grid;
  gap: ${props => props.isMobile ? '24px' : '16px'};
  width: 100%;
  padding: 30px 24px;

  ${props => props.isMobile && css`
    grid-template-columns: repeat(1, 1fr);
  `}

  ${props => props.isTablet && css`
  grid-template-columns: repeat(3, 1fr);
  `}

  ${props => props.isDesktop && css`
    grid-template-columns: repeat(4, 1fr);
  `}
`

export const VideosList = ({list}) => {
  const {workout} = useParams();
  const {isMobile, isTablet, isDesktop} = useMatchMedia();
  const [openVideoId, setOpenVideoId] = useState(null);

  return (
    <StyledVideosList
      isMobile={isMobile}
      isTablet={isTablet}
      isDesktop={isDesktop}
    >
      {list[workout]['videos'].map(i =>
        <VideoCard
          onClick={() => setOpenVideoId(i.videoId)}
          title={i.title}
          videoId={i.videoId}
          key={i.title}
        />
      )}
      {openVideoId &&
        <VideoPlayer
          openVideoId={openVideoId}
          setOpenVideoId={setOpenVideoId}
        />
      }
    </StyledVideosList>
  )
}

export default VideosList;