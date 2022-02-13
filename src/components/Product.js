import React from "react";

export default function Product(props) {
  return (
      <>
    <div className="row">
      <div className="col-5">
        <h2>{props.product.name}</h2>
          <span class="badge bg-secondary">₹{props.product.price}</span>
        </div>
        <div className="col-3">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              class="btn btn-success"
              onClick={() => {
                props.incrementQuantity(props.index);
              }}
            >
              +
            </button>
            <button type="button" class="btn btn-warning">
              {props.product.quantity}
            </button>
            <button type="button" class="btn btn-danger" onClick={()=>{props.decrementQuantity(props.index)}}>
              -
            </button>
            </div>
          </div>
      <div className="col-2">
        {props.product.price * props.product.quantity}
      </div>
    </div>
    </>
  );
}
