import "./Login.scss";

// Importing the image
import Background from "../assets/background.jpg";
import Logo from "../assets/logo.png";
import google from "../assets/google.png";

export default function Login() {
  return (
    <div id="main">
      <div id="login">
        <div id="title">
          <div id="logo">
            <img src={Logo} alt="this is our logo" />
          </div>
          <div id="name">Florence</div>
        </div>
        <div id="body">
          <div id="upper">
            <div id="welcome">Welcome back,</div>
            <div id="continue">Continue with Google or enter your details.</div>
            <div id="google">
              <div id="googleButton">
                {/* <div id="logogoogle"> */}
                <img src={google} alt="" />
                {/* </div> */}
                <div id="loginWIthGoogle">Log in with Google</div>
              </div>
            </div>
            <div id="or">
              <div className="line"></div>
              <div id="text">or</div>
              <div className="line"></div>
            </div>
          </div>
          <div id="lower">
            <div className="input">
              <input type="text" placeholder="Email address" />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
            </div>
            <div id="remember">
              <div id="rem">
                <input type="checkbox" />
                <div id="message">Remember for 30 days</div>
              </div>
              <div id="forgot">Forgot password?</div>
            </div>
            <div id="login2">
              <div id="loginButton"></div>
              <div id="loginText">Log in</div>
            </div>
            <div id="noAcc">
              <div id="account">Dont have an account?</div>
              <div id="signup">Sign up for free</div>
            </div>
          </div>
        </div>
      </div>
      <div id="img">
        {/* Instead of writing: <img src="background.jpg" /> cz react don't know about its location in our project */}
        <img src={Background} />
      </div>
    </div>
  );
}
