import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

export default function ProductDescription(props) {
  const history = useHistory();
  const [product, setproduct] = useState({
    productId: "",
    productName: "",
    discription: " ",
    category: {
        id: 1,
        category: "",
    },
    price: "",
    image: "",
    isSold: "",
    date: "",
    city: "",
    tags: ""
});
const [quantity, setQuantity] = useState(1);
  const update = async () => {
    let data = await fetch(
      `http://localhost:8085/product-api/product/${props.currentProduct}`
    );
    
    let parsedData = await data.json();
    setproduct(await parsedData);
    // let user=product.user;
    // console.log("Productdiscription"+product.user.userName);

  };
  const handleClick = async (event) => {{
    if(localStorage.getItem("user")== null){
      props.showAlert("Please login first 🤞", "danger");
      return;
    }

    const confirm=window.confirm("Are you sure to add this product in your cart?");
    if (confirm){
      const response = await fetch("http://localhost:8085/orders-api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productdto: { "productId": product.productId },
          buyerdto: {"userId":JSON.parse(localStorage.getItem("user")).userId},
          isOrderd : "N",
          "quantity":quantity
        }),
      });
      if (response.ok) {
        props.showAlert("Successfully added to the cart ", "success");
      } else {
        props.showAlert("Some Error Occured", "danger");
      }

    }
 
  }
}
const handleAddQuantityClick = () => {
  debugger;
    var newQuantity = quantity + 1;
  if (newQuantity <= 100) {
    setQuantity(newQuantity);
  }
};
const handleRemoveQuantityClick = () => {
  debugger;
    var newQuantity = quantity - 1;
  if (newQuantity >= 1) {
    setQuantity(newQuantity);
  }
};
  useEffect(() => {
    update();

  }, []);
  return (
    <>
    {product && (
      <div className="container my-5 shadow">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-7">
              <img
                src={"http://localhost:8085/" + product.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-5">
              <div className="card-body mx-4">
                <h2 className="card-title">{product.productName}</h2>
                <br />
                <h4 className="card-title">Price: {product.price} ₹</h4>
                <p className="card-text my-2">
                  <b>Description:</b>
                </p>
                <div className="card-text my-2">{product.discription}</div>
                <p className="card-text my-2">
                  <b>SubTotal :  </b>
                  <b style={{color:"green"}}>{product.price*quantity} ₹</b> 
                </p>
                <div >
            <label>
              <b>Add Quantity</b>
            </label>
            <input
              type="number"
              name="quantity"
              class="form-control"
              id="quantity"
              placeholder="Enter Quantity"
              required
              readOnly
              value={quantity}
              min={1}
              max={100}
             
            />
           <div style={{ display: "flex", gap: "10px" }}>
            <button className="btn btn-primary" onClick={handleAddQuantityClick} > Add </button>
            <button className="btn btn-danger" onClick={handleRemoveQuantityClick} > Remove </button>
            </div>
            <br />
            <span id="vmb" class="text-danger font-weight-bold"></span>
          </div>
              </div>
           
            </div>
          </div>
          <div className="card-footer bg-white text-center">
            <button onClick={handleClick} type="button" className="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  
  );
}
