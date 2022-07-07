import { useMatchMedia } from "../hooks/useMatchMedia";
import styled from "styled-components";
import { c } from "../components/styles";
import PageWrapper from "../components/common/PageWrapper";
import Button from "../components/ui/Button";
import bg from "../images/bg_home.jpg";

const StyledHome = styled.div`
  min-height: 750px;
  background-image: url(${bg});
  background-size: auto 750px;
  background-position: top center;
  background-repeat: no-repeat;

  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: ${props => props.isMobile ? '460px' : '550px'};
    padding: 120px 0 0 0;

    h1 {
      margin: 0 0 20px 0;
      font-family: ${c.font_title};
      font-size: ${props => props.isMobile ? '36px' : '58px'};
      font-weight: 400;
      line-height: 1.1;

      span {
        color: ${c.clr_accent};
      }
    }

    p {
      max-width: 490px;
      margin: 0 0 36px 0;
      font-size: 18px;
    }

    a {
      align-self: flex-start;
      color: inherit;
      text-decoration: none;
    }
  }
`

export const Home = () => {
  const {isMobile} = useMatchMedia();

  return (
    <StyledHome isMobile={isMobile}>
      <PageWrapper noCustomScroll>
        <div className='intro'>
          <h1><span>MyFit</span> - твой путь к совершенству</h1>
          <p>Выберите программу тренировок и создайте идеальное тело о котором вы мечтаете</p>
          <Button to='/workouts/chest' text='Тренировки' />
        </div>
      </PageWrapper>
    </StyledHome>
  )
}

export default Home;