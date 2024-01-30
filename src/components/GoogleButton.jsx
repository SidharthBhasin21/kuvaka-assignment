import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/slices/authSlice";
import { useDispatch } from "react-redux";


const GoogleButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  return (
    <GoogleLogin
      onSuccess={
        (res) => {
        console.log(res);
        dispatch(setUser(res.credential))
        navigate("/dashboard")

      }
      

    }
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
export default GoogleButton;
