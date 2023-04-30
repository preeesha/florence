import "./Listing.scss";

import { useEffect, useState } from "react";
import MultiRangeSlider from "../components/multiRangeSlider";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import {
  networkRequest,
  toTitleCase,
  useNetworkRequest,
  useNetworkRequestOnMount,
} from "../lib/helpers";

function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <div
      className="product"
      onClick={() => {
        // navigate("/product/" + props.product._id);
        navigate(`/product/${props.product._id}`);
      }}
    >
      <div className="like">
        <i className="fi fi-rr-heart"></i>
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
  const params = useParams();
  const [products, setProducts] = useState();

  const isTrendingSection = params.category.toLowerCase() === "trending";

  useNetworkRequest(
    isTrendingSection ? "GET" : "POST",
    isTrendingSection ? "/getTrendingProducts" : "/getProductsByCategory",
    isTrendingSection ? undefined : { category: params.category.toLowerCase() },
    async (res) => {
      const body = await res.json();
      const allProducts = body["data"];
      setProducts(allProducts);
    },
    [params]
  );

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
          <div className="category">{toTitleCase(params.category)}</div>
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
