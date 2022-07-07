import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, setAlert } from "../store/signUpSlice";
import { setAlert as setSignInAlert } from "../store/signInSlice";
import styled from "styled-components";
import { c } from "../components/styles";
import { Formik } from "formik";
import * as yup from "yup";
import PageWrapper from "../components/common/PageWrapper";
import FormWrap from "../components/common/FormWrap";
import Input from "../components/ui/Input";
import bg from "../images/bg_page.jpg"; 
import { useEffect } from "react";

const StyledSignUp = styled.div`
  min-height: 750px;
  background-image: url(${bg});
  background-size: auto 750px;
  background-position: top center;
  background-repeat: no-repeat;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0 0 0;

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 100px 50px 100px;
      background-color: ${c.clr_additional};
      border: 2px solid ${c.clr_accent_op25};

      svg {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 26px;
        height: 26px;
        color: ${c.clr_accent_op25};
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          color: ${c.clr_accent_hover};
        }
      }

      div:last-of-type {
        margin: 0 0 12px 0;
      }

      h2 {
        font-family: ${c.font_title};
        font-weight: 400;
        margin: 0 0 24px 0;
      }
    }
  }
`

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useSelector(state => state.signUpReducer.alert);
  const status = useSelector(state => state.signUpReducer.status);
  
  useEffect(() => {
    if (alert === 'Вы зарегистрированы!') {
      navigate('/signin');
      dispatch(setSignInAlert(alert))
    }
  }, [alert]);

  const validationSchema = yup.object().shape({
    email: yup.string()
      .email('Введите верный email')
      .required('Обязательно для заполнения'),
    password: yup.string()
      .min(6, 'Минимум шесть символов')
      .required('Обязательно для заполнения'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'пароли не совпадают').required('Обязательно для заполнения'),
  });

  const handleClick = (values) => {
    dispatch(signUpUser({values}));
  }

  return (
    <StyledSignUp>
      <PageWrapper>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur 
        onSubmit={handleClick}
        validationSchema={validationSchema}
      >
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
          <FormWrap
            handleSubmit={handleSubmit}
            status={status}
            alert={alert}
            setAlert={setAlert}
            isValid={isValid}
            dirty={dirty}
            title='Регистрация'
            buttonText='Отправить'
          >
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              name='email'
              value={values.email}
              placeholder='Введите email'
              isError={touched.email && errors.email && true}
              errorText={touched.email && errors.email}
            />
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
              name='password'
              value={values.password}
              placeholder='Введите пароль'
              isError={touched.password && errors.password && true}
              errorText={touched.password && errors.password}
            />
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
              name='confirmPassword'
              value={values.confirmPassword}
              placeholder='Подтвердите пароль'
              isError={touched.confirmPassword && errors.confirmPassword && true}
              errorText={touched.confirmPassword && errors.confirmPassword}
            />
          </FormWrap>  
        )}
      </Formik>
      </PageWrapper>
    </StyledSignUp>
  )
}

export default SignUp;