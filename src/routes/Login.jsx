import "./Login.scss";
import { useNavigate } from "react-router-dom";

// Importing the image
import Logo from "../assets/logo.png";
import google from "../assets/google.png";
import { useEffect, useState } from "react";

const IMAGES = [
  "https://e0.pxfuel.com/wallpapers/238/812/desktop-wallpaper-white-lilies-and-background-stargazer-lily.jpg",
  "https://e0.pxfuel.com/wallpapers/383/835/desktop-wallpaper-white-easter-lilies-widescreen-flowers-in-2019-lily-stargazer-lily-thumbnail.jpg",
  "https://cdn.shopify.com/s/files/1/2690/0106/products/DSC03418_1b5b6685-17f8-476c-a3fd-a197728d6859_600x.jpg?v=1638614981",
  "https://wallpaperboat.com/wp-content/uploads/2020/04/aesthetic-rose-wallpaper-1920x1080-1.jpg",
  "https://wallpaperset.com/w/full/0/3/a/479893.jpg",
  "https://getwallpapers.com/wallpaper/full/e/3/6/1413450-cherry-blossom-desktop-background-1920x1080-meizu.jpg",
];

export default function Login() {
  const [email, setEmail] = useState("hummingbird@florence.com");
  const [password, setPassword] = useState("Hello@123");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [backgroundImg, setBackgroundImg] = useState(IMAGES[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      const randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];
      setBackgroundImg(randomImage);
    }, 4000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div id="login-component">
      <div id="login">
        <div id="header">
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
              <input
                type="text"
                value={email}
                placeholder="Email address"
                onChange={(e) => {
                  // e.target = document.getElementById(...)
                  const newEmail = e.target.value;
                  setEmail(newEmail);
                }}
              />
            </div>
            <div className="input">
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  const newPassword = e.target.value;
                  setPassword(newPassword);
                }}
              />
            </div>
            <div id="error">{error}</div>
            <div id="remember">
              <div
                id="rem"
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                />
                <div id="message">Remember for 30 days</div>
              </div>
              <div id="forgot">Forgot password?</div>
            </div>
            <div
              id="login2"
              onClick={async () => {
                setError("");
                const res = await fetch("http://localhost:4000/login", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    email: email,
                    password: password,
                  }),
                });
                const body = await res.json();
                if (res.status === 200) {
                  localStorage.setItem("token", body["token"]);
                  navigate("/listing");
                } else {
                  /* Choice 1 */
                  // setError(body["message"]);

                  /* Choice 2 */
                  const errorMsg = body["message"];
                  setError(errorMsg);
                }
              }}
            >
              <div id="loginText">Log in</div>
            </div>
            <div id="noAcc">
              <div id="account">Dont have an account?</div>
              <div
                id="signup"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up for free
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="img">
        {/* Instead of writing: <img src="background.jpg" /> cz react don't know about its location in our project */}
        <img src={backgroundImg} />
      </div>
    </div>
  );
}
