import './addToCart.css'
import React, {useState} from "react";
import Divider from "../divider-component/Divider";

const AddToCart = () => {

  const [count, setCount] = useState(0);

  const handleDecreaseCount = () => {
    if (count >= 1) {
      setCount(count-1)
    }
  }

  return <React.Fragment>
    <Divider />
    <div className="add-to-cart-container">
      <Divider />
      <div className="cart-count-btns-container">
        <div className="minus-btn" onClick={handleDecreaseCount}>-</div>
        <div className="cart-count">{count}</div>
        <div className="plus-btn" onClick={() => setCount(prevState => prevState+1)}>+</div>
      </div>
      <div className="add-to-cart-btn" onClick={() => setCount(prevState => prevState+1)}>Add to cart</div>
    </div>
    <Divider />
  </React.Fragment>
}

export default AddToCart