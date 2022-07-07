import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./useAuth";

export const useLogIn = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fromPage = location.state?.from?.pathname || '/';
    if (auth) navigate(fromPage, {replace: true});
  }, [auth])
}

export default useLogIn;