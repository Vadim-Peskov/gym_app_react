import { useSelector } from "react-redux";

export const useAuth = () => {
  const auth = useSelector(state => state.signInReducer.auth);
  return auth;
}

export default useAuth;