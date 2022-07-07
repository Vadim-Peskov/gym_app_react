import { useDispatch, useSelector } from "react-redux";
import useLogIn from "../hooks/useLogIn";
import { signInUser, setAlert } from "../store/signInSlice";
import styled from "styled-components";
import {Formik} from "formik";
import * as yup from "yup";
import PageWrapper from "../components/common/PageWrapper";
import FormWrap from "../components/common/FormWrap";
import bg from "../images/bg_page.jpg"; 
import Input from "../components/ui/Input";

const StyledSignIn = styled.div`
  min-height: 750px;
  background-image: url(${bg});
  background-size: auto 750px;
  background-position: top center;
  background-repeat: no-repeat;
`

export const SignIn = () => {
  useLogIn();
  const dispatch = useDispatch();
  const alert = useSelector(state => state.signInReducer.alert);
  const status = useSelector(state => state.signInReducer.status);

  const validationSchema = yup.object().shape({
    email: yup.string()
      .email('Введите верный email')
      .required('Обязательно для заполнения'),
    password: yup.string()
      .min(6, 'Минимум шесть символов')
      .required('Обязательно для заполнения'),
  });

  const handleClick = (values) => {
    dispatch(signInUser({values}));
  }

  return (
    <StyledSignIn>
      <PageWrapper>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur 
        onSubmit={(values) => {
          handleClick(values);
        }}
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
            title='Войти'
            buttonText='Войти'
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
          </FormWrap>
        )}
      </Formik>
      </PageWrapper>
    </StyledSignIn>
  )
}

export default SignIn;