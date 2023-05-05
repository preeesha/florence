import "./profile.scss";
import background from "../assets/background.jpg";
import Topbar from "../components/Topbar";
export default function Profile() {
  return (
    <>
      <Topbar />
      <div id="Profile-component">
        <div id="left">
          <div className="top">
            <div className="name">Hey User </div>
            <div className="image">
              <img src={background} alt="" />
            </div>
          </div>
          <div className="line">
            <div className="logged">Logged in via user@gmail.com</div>
          </div>
          <div className="line"></div>
          <div className="orderSection">
            <div className="box">
              <div className="order">Order</div>
              <div className="des">
                Check your orders status(track,return,cancle etc)
              </div>
            </div>
            <div className="icon">
              <i class="fi fi-sr-apps-sort"></i>
            </div>
          </div>
          <div className="line"></div>
          <div className="MyCouponsSection">
            <div className="box">
              <div className="coupon">My Coupons</div>
              <div className="des">
                Browse coupons to get discount on Florance
              </div>
            </div>
            <div className="icon">
              <i class="fi fi-sr-ticket"></i>
            </div>
          </div>
          <div className="line"></div>
          <div className="walletSection">
            <div className="box">
              <div className="wallet">Wallet</div>
              <div className="des">Check your Florance Wallet balance</div>
            </div>
            <div className="icon">
              <i class="fi fi-sr-wallet"></i>
            </div>
          </div>
          <div className="line"></div>
          <div className="wishlistSection">
            <div className="box">
              <div className="wishlist">Wishlist</div>
              <div className="des">Bye from items saved in Wishlist</div>
            </div>
            <div className="icon">
              <i class="fi fi-sr-heart"></i>
            </div>
          </div>
          <div className="line"></div>
          <div className="addressSection">
            <div className="box">
              <div className="address">Address</div>
              <div className="des">Manage your saved Addresses</div>
            </div>
            <div className="icon">
              <i class="fi fi-sr-address-book"></i>
            </div>
          </div>
          <div className="line"></div>
          <div className="profileSection">
            <div className="box">
              <div className="profile">Profile</div>
              <div className="des">Manage your profile information</div>
            </div>
            <div className="icon">
              <i class="fi fi-sr-user-pen"></i>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div id="right"></div>
    </>
  );
}
