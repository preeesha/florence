import "./Cart.scss";

import Topbar from "../components/Topbar";

export default function Cart() {

  
  return (
    <div className="CartComponent">
      <Topbar></Topbar>
      <div className="body">
        <div className="left">
          <div className="card">
            img
          </div>
        </div>
        <div className="right">reciept</div>
      </div>
    </div>
  );
}
