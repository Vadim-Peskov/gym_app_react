import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNutrition } from "../store/nutritionSlice";
import styled from "styled-components";
import PageWrapper from "../components/common/PageWrapper";
import ContentWrap from "../components/common/ContentWrap";
import NutritionList from "../components/common/NutritionList";
import Aside from "../components/common/Aside";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import bg from "../images/bg_page.jpg";

const StyledNutrition = styled.div`
  min-height: 750px;
  background-image: url(${bg});
  background-size: auto 750px;
  background-position: top center;
  background-repeat: no-repeat;
`

export const Nutrition = () => {
  const dispatch = useDispatch();
  const nutritionList = useSelector(state => state.nutritionReducer.nutritionList);
  const nutritionKeys = useSelector(state => state.nutritionReducer.nutritionKeys);
  const status = useSelector(state => state.nutritionReducer.status);

  useEffect(() => {
    dispatch(loadNutrition());
  }, []);

  return (
    <StyledNutrition>
      <PageWrapper>
        <ContentWrap>
          {status === 'loading' && <Loader />}
          {status === 'resolved' &&
            <>
              <Aside keys={nutritionKeys} />
              <NutritionList list={nutritionList} />
            </>
          }
          {status === 'rejected' && <ErrorMessage />}
        </ContentWrap>
      </PageWrapper>
    </StyledNutrition>
  )
}

export default Nutrition;