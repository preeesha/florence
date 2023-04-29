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
          <div id="sort">
            Sort by
            <div className="sorter">Title</div>
            <div className="sorter">Stars Given</div>
            <div className="sorter">Price</div>
            <div className="sorter">Delivery Charge</div>
            <div className="sorted">Discount</div>
          </div>
          <div id="ocassions">
            <div id="name">ocassion</div>
            <div className="ocassion">Birthday</div>
            <div className="ocassion">anniversary</div>
            <div className="ocassion">Love & Romance</div>
            <div className="ocassion">Celebration</div>
            <div className="ocassion">Furenal</div>
          </div>
          <div id="price">
            <div className="name">price</div>
            <MultiRangeSlider
              min={1}
              max={20000}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
          <div id="deliveryCharge">
            <div className="name">deliveryCharge</div>
            <div className="slider"></div>
          </div>
        </div>
        <div id="right">
          <div id="category">Celebration</div>
          <div id="allProducts">
            {products.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
          <div id="category">Birthday</div>
          <div id="allProducts">
            {products.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
