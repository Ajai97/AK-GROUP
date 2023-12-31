import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import image1 from "./full-width-1.webp";
import image2 from "./full-width-2.webp";
import image3 from "./full-width-3.webp";
import image4 from "./full-width-4.webp";

function Home(props) {
  const [products, setproducts] = useState([]);
 

  const update = async () => {
    let data = await fetch(
      "http://localhost:8085/product-api/product/0/date/desc"
    );

    let parsedData = await data.json();
    setproducts(await parsedData);
  };

  useEffect(() => {
    update();
  }, []);

 
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={image1}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={image2}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
             src={image3}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
             src={image4}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div >
      <div className="container my-5 ">
      <h3>Fresh recommendations</h3>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4" key={product.productId}>
                <ProductCard setCurrentProduct={props.setcurrentProduct} product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
