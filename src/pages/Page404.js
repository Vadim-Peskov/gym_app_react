import styled from "styled-components";
import { c } from "../components/styles";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import Button from "../components/ui/Button";
import bg from "../images/bg_page.jpg";

const Styled404 = styled.div`
  min-height: 750px;
  background-image: url(${bg});
  background-size: auto 750px;
  background-position: top center;
  background-repeat: no-repeat;

  .wrap {
    padding: 120px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin: 0 0 36px 0;
      font-family: ${c.font_title};
      font-size: 40px;
      font-weight: 400;
      line-height: 1.1;

      span {
        color: ${c.clr_accent};
      }
    }
  }
`

export const Page404 = () => {
  return (
    <Styled404>
      <Container>
        <Header />
        <div className='wrap'>
          <h2>Страница не найдена</h2>
          <Button to='/' text='На главную' />
        </div>
      </Container>
    </Styled404>
  )
}

export default Page404;