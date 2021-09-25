import './ProductCard.css'
import {CATEGORY_CARD, PRODUCT_CARD} from "../../utils/StringConstants";
import {Icon, Rating} from "@mui/material";

import {useState} from "react";

const ProductCard = ({id, type, setModalOpen, setQuickviewProduct}) => {

  const [isWishSelected, setWishSelected] = useState(false);

  const [img] = useState(`https://d-themes.com/react/porto/demo3/images/home/categories/category-`)

  const handleSelectWish = (e) => {
    setWishSelected(prevState => !prevState)
  }

  const handleClickQuickView = () => {
    setQuickviewProduct(`${img+id}.jpg`)
    setModalOpen(true)
  }

  return <div className='product-card-container'>
    <div className="product-img-container">
      {type === CATEGORY_CARD && <div className='overlay' />}
      {type === PRODUCT_CARD && <div className="quick-view-btn" onClick={() => handleClickQuickView()}>Quick view</div>}
      {type === PRODUCT_CARD && <div className="add-to-bag-btn"></div>}
      <img
          className='product-img'
          src={`${img+id}.jpg`}
          alt="something"/>

    </div>
    {(type === CATEGORY_CARD) && <div className="category-name">Electronics</div>}
    {(type === PRODUCT_CARD) && <div className="product-summary">
      <div className="product-name-container">
        <div className="product-name">Product Name</div>
        {!isWishSelected
            ? <Icon className='wish-icon' onClick={handleSelectWish}>favorite_border</Icon>
            : <Icon className='wish-icon-selected' onClick={handleSelectWish}>favorite</Icon>
        }
      </div>
      <Rating
          className='product-rating'
          size='small'
          name="read-only"
          value={3} readOnly />
      <div className="price-tag">$299</div>
    </div>}
  </div>
}

export default ProductCard