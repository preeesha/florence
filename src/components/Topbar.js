import "./Topbar.scss";

import Logo from "../assets/logo.png";

export default function Topbar() {
  return (
    <>
      <div id="title">
        <div id="app">
          <div id="logo">
            <img src={Logo} alt="" />
          </div>
          <div id="florence">Florence</div>
        </div>
        <div id="catagory">
          <div id="selectCatory">Birthday</div>
          <div className="category">Love & Romance</div>
          <div className="category">Anniversary</div>
          <div className="category">Celebration</div>
          <div className="category">Sympathy & Funeral</div>
        </div>
      </div>
      <div id="divider"></div>
    </>
  );
}
