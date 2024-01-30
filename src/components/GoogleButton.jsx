import { GoogleLogin } from "@react-oauth/google";

const responseGoogle = (response) => {
  const { profileObj } = response;
  console.log(`Welcome, ${profileObj.name}!`);
  // Perform actions using user data
};
const GoogleButton = () => {
  return (
    <GoogleLogin
      onSuccess={(res) => {
        console.log(res);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
export default GoogleButton;
