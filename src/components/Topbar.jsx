import "./Topbar.scss";

import Logo from "../assets/logo.png";
import { useNavigate, useParams } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <>
      <div id="title">
        <div className="leftTitle">
          <div id="app">
            <div id="logo">
              <img src={Logo} alt="" />
            </div>
            <div id="florence">Florence</div>
          </div>
          <div id="catagory">
            <div
              className={
                "category " + (params.category === "birthday" ? "active" : "")
              }
              onClick={() => {
                navigate("/listing/birthday");
              }}
            >
              Birthday
            </div>
            <div
              className={
                "category " + (params.category === "romance" ? "active" : "")
              }
              onClick={() => {
                navigate("/listing/romance");
              }}
            >
              Love & Romance
            </div>
            <div
              className={
                "category " +
                (params.category === "anniversary" ? "active" : "")
              }
              onClick={() => {
                navigate("/listing/anniversary");
              }}
            >
              Anniversary
            </div>
            <div
              className={
                "category " +
                (params.category === "celebration" ? "active" : "")
              }
              onClick={() => {
                navigate("/listing/celebration");
              }}
            >
              Celebration
            </div>
            <div
              className={
                "category " + (params.category === "sympathy" ? "active" : "")
              }
              onClick={() => {
                navigate("/listing/sympathy");
              }}
            >
              Sympathy & Funeral
            </div>
          </div>
        </div>
        <div className="rightTitle">
          <div
            className="cart"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <i class="fi fi-sr-shopping-cart"></i>
          </div>
        </div>
      </div>
      <div id="divider"></div>
    </>
  );
}
