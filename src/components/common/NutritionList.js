import { useParams } from "react-router-dom";
import styled from "styled-components";
import NutritionItem from "./NutritionItem";

const StyledNutritionList = styled.div`
  display: grid;
  gap: 24px;
  width: 100%;
  padding: 30px 24px;
`

export const NutritionList = ({list}) => {
  const {nutrition} = useParams();

  return (
    <StyledNutritionList>
      {list[nutrition]['recipes'].map(i =>
        <NutritionItem
          title={i.title}
          img={i.img}
          text={i.text}
          key={i.title}
        />
      )}
    </StyledNutritionList>
  )
}

export default NutritionList;