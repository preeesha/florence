import "./Listing.scss";

import { useEffect, useState } from "react";
import MultiRangeSlider from "../components/multiRangeSlider";
import Topbar from "../components/Topbar";

function ProductCard(props) {
  return (
    <div className="product">
      <div className="like">
        <i class="fi fi-rr-heart"></i>
      </div>
      <div className="image">
        <img src={props.product.images[0]} />
      </div>
      <div className="prodInfo">
        <div className="podTitle">
          {props.product.title.slice(0, 45).trim()}
          {props.product.title.length > 45 ? "..." : ""}
        </div>
        <div className="price">₹ {props.product.price}</div>
      </div>
    </div>
  );
}

export default function Listing() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/getTrendingProducts", {
      method: "GET",
    }).then(async (res) => {
      const body = await res.json();
      const trendingProducts = body["data"];
      console.log(trendingProducts);
      setProducts(trendingProducts);
    });
  }, []);

  if (!products) return <div>Loading</div>;
  return (
    <div id="Listing-component">
      <Topbar />
      <div id="body">
        <div id="left">
          <div className="section">
            <div className="heading">Sort by</div>
            <div className="content">
              <div className="option active">
                <span>Title</span>
                <i className="fi fi-sr-arrow-up"></i>
              </div>
              <div className="option">
                <span>Stars Given</span>
                {/* <i className="fi fi-sr-arrow-up"></i> */}
              </div>
              <div className="option">
                <span>Price</span>
                {/* <i className="fi fi-sr-arrow-up"></i> */}
              </div>
              <div className="option">
                <span>Delivery Charge</span>
                {/* <i className="fi fi-sr-arrow-up"></i> */}
              </div>
              <div className="option">
                <span>Discount</span>
                {/* <i className="fi fi-sr-arrow-up"></i> */}
              </div>
            </div>
          </div>
          <div className="section">
            <div className="heading">Occasion</div>
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" />
                <span>Birthday</span>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <span>Anniversary</span>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <span>Love & Romance</span>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <span>Celebration</span>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <span>Furenal</span>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="heading">Price</div>
            <div className="content">
              <MultiRangeSlider
                min={1}
                max={20000}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
          </div>
          <div className="section">
            <div className="heading">Discount</div>
            <div className="content">
              <MultiRangeSlider
                min={0}
                max={50}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
          </div>
          <div className="section">
            <div className="heading">Delivery charges</div>
            <div className="content">
              <MultiRangeSlider
                min={30}
                max={50}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
          </div>
        </div>
        <div id="right">
          <div className="category">Celebration</div>
          <div className="allProducts">
            {products.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
