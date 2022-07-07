import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const RequireAuth = ({component}) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth) {
    return <Navigate to='/signin' state={{from: location}}/>
  }
  return component;

}

export default RequireAuth;