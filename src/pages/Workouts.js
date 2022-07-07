
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWorkouts } from "../store/workoutsSlice";
import styled from "styled-components";
import PageWrapper from "../components/common/PageWrapper";
import ContentWrap from "../components/common/ContentWrap";
import Aside from "../components/common/Aside";
import VideosList from "../components/common/VideosList";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import bg from "../images/bg_page.jpg";

const StyledWorkouts = styled.div`
  min-height: 750px;
  background-image: url(${bg});
  background-size: auto 750px;
  background-position: top center;
  background-repeat: no-repeat;
`

export const Workouts = () => {
  const dispatch = useDispatch();
  const wokoutsList = useSelector(state => state.workoutsReducer.wokoutsList);
  const wokoutsKeys = useSelector(state => state.workoutsReducer.wokoutsKeys);
  const status = useSelector(state => state.workoutsReducer.status);

  useEffect(() => {
    dispatch(loadWorkouts());
  }, []);

  return (
    <StyledWorkouts>
      <PageWrapper>
        <ContentWrap>
          {status === 'loading' && <Loader />}
          {status === 'resolved' &&
            <>
              <Aside keys={wokoutsKeys} />
              <VideosList list={wokoutsList} />
            </>
          }
          {status === 'rejected' && <ErrorMessage />}
        </ContentWrap>
      </PageWrapper>
    </StyledWorkouts>
  )
}

export default Workouts;