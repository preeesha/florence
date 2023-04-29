import "./Product.scss";
import Logo from "../assets/logo.png";

import { useEffect, useState } from "react";
import { SAMPLE_PRODUCT } from "../lib/misc";

function ProductInfo(props) {
  return (
    <div className="section">
      <div className="heading">{props.heading}</div>
      {props.content.map((section) => {
        if (section.type === "para") {
          return <p>{section.content}</p>;
        }
        return (
          <ul>
            {section.content.map((s) => {
              return <li>{s}</li>;
            })}
          </ul>
        );
      })}
    </div>
  );
}

export default function Product() {
  const [product, setProduct] = useState(null);
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/getTrendingProducts", {
      method: "GET",
    }).then(async (res) => {
      const body = await res.json();
      const trendingProducts = body["data"];
      const selectedProduct =
        trendingProducts[Math.floor(Math.random() * trendingProducts.length)];
      selectedProduct.images = selectedProduct.images.slice(0, 4);
      console.log(selectedProduct);
      setProduct(selectedProduct);
      setUrl(selectedProduct.images[0]);
    });
  }, []);

  useEffect(() => {
    function worker(e) {
      if (e.key === "ArrowUp") {
        const imagePos = product.images.indexOf(url);
        if (imagePos === 0) return;
        e.preventDefault();
        const nxtImg = product.images[imagePos - 1];
        setUrl(nxtImg);
      }
      if (e.key === "ArrowDown") {
        const imagePos = product.images.indexOf(url);
        if (imagePos === product.images.length - 1) return;
        e.preventDefault();
        const nxtImg = product.images[imagePos + 1];
        setUrl(nxtImg);
      }
    }

    document.addEventListener("keydown", worker);
    return () => {
      document.removeEventListener("keydown", worker);
    };
  }, [product, url]);

  if (!product) return <div>Loading</div>;

  return (
    <div id="product-component">
      {/* {product["title"]} = ₹{product["price"]} */}
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
      <div id="body">
        <div id="left">
          <div id="slider">
            {product.images.map((image) => {
              return (
                <img
                  src={image}
                  // style={{
                  //   border: image === url ? "2px solid transparent" : "none",
                  //   outline: image === url ? "1px solid #000" : "none",
                  // }}
                  className={image === url ? "active" : ""}
                  onClick={() => {
                    setUrl(image);
                  }}
                />
              );
            })}
            {/* <div className="icons">
              </div> */}
            <div
              className={
                "icon " + (product.images.indexOf(url) === 0 ? "disabled" : "")
              }
              onClick={() => {
                // console.log(product.images);
                const imagePos = product.images.indexOf(url);
                if (imagePos === 0) return;
                const prevImage = product.images[imagePos - 1];
                setUrl(prevImage);
              }}
            >
              <i className="fi fi-rr-angle-up"></i>
            </div>
            <div
              className={
                "icon " +
                (product.images.indexOf(url) === product.images.length - 1
                  ? "disabled"
                  : "")
              }
              onClick={() => {
                const imagePos = product.images.indexOf(url);
                if (imagePos === product.images.length - 1) return;
                const nxtImg = product.images[imagePos + 1];
                setUrl(nxtImg);
              }}
            >
              <i className="fi fi-rr-angle-down"></i>
            </div>
          </div>
          <div id="image">
            <img src={url} />
          </div>
        </div>
        <div id="right">
          <div id="top">
            <div id="category">Celebration</div>
            <div id="prodTitle">{product["title"]}</div>
            <div id="review">
              <div id="stars">
                <div id="star">
                  <i className="fi fi-sr-star"></i>
                  <i className="fi fi-sr-star"></i>
                  <i className="fi fi-sr-star"></i>
                  <i className="fi fi-sr-star"></i>
                  <i className="fi fi-rr-star"></i>
                </div>
                <div id="total">{product.starRatings}</div>
              </div>
              <div id="comments">
                <i className="fi fi-sr-comment"></i>
                <div id="comments">{product.reviews.length} reviews</div>
              </div>
            </div>
            <div id="cart">
              <div id="cartButton">
                <i className="fi fi-sr-shopping-cart"></i>
                <div>Add to cart</div>
              </div>
              <div id="priceButton">
                <i>₹</i>
                <div id="price">{product.price}</div>
              </div>
            </div>
          </div>
          <div id="line"></div>
          <div id="bottom">
            <div className="card">
              <i className="fi fi-sr-credit-card"></i>
              <span>Secure payment</span>
            </div>
            <div className="card">
              <i className="fi fi-sr-truck-side"></i>
              <span>Free shipping</span>
            </div>
            <div className="card">
              <i className="fi fi-sr-truck-couch"></i>
              <span>No returns</span>
            </div>
            <div className="card">
              <i className="fi fi-sr-badge-check"></i>
              <span>Assured quality</span>
            </div>
          </div>
          <ProductInfo heading="Description" content={product.description} />
          <ProductInfo
            heading="Care Instructions"
            content={product.careInstructions}
          />
          <ProductInfo
            heading="Delivery Information"
            content={product.deliveryInfo}
          />
        </div>
      </div>
    </div>
  );
}
