import './ProductCard.css'
import {CATEGORY_CARD, PRODUCT_CARD} from "../../utils/StringConstants";
import {Icon, Rating} from "@mui/material";

import {useState} from "react";
import {formatProductPageUrl, stopPropagationAndPreventDefault, toCurreny} from "../../utils/CommonUtils";
import {useHistory} from "react-router-dom";

const ProductCard = ({data, id, type, setModalOpen, setQuickviewProduct}) => {

  const history = useHistory();

  const [isWishSelected, setWishSelected] = useState(false);

  const handleSelectWish = (e) => {
    stopPropagationAndPreventDefault(e)
    setWishSelected(prevState => !prevState)
  }

  const handleClickQuickView = (e) => {
    stopPropagationAndPreventDefault(e)
    setQuickviewProduct(data)
    setModalOpen(true)
  }

  const handleClickProduct = (e) => {
    stopPropagationAndPreventDefault(e)
    console.log('clicked on', data)
    history.push(`/product-details/${formatProductPageUrl(data)}`)
  }

  return <div className='product-card-container' onClick={handleClickProduct}>
    <div className="product-img-container">
      {type === CATEGORY_CARD && <div className='overlay' />}
      {type === PRODUCT_CARD && <div className="quick-view-btn" onClick={handleClickQuickView}>Quick view</div>}
      {type === PRODUCT_CARD && <div className="add-to-bag-btn"></div>}
      <img
          className='product-img'
          src={data.images[0]}
          alt="something"/>

    </div>
    {(type === CATEGORY_CARD) && <div className="category-name">Electronics</div>}
    {(type === PRODUCT_CARD) && <div className="product-summary">
      <div className="product-name-container">
        <div className="product-name">{data.productName}</div>
        {!isWishSelected
            ? <Icon className='wish-icon' onClick={handleSelectWish}>favorite_border</Icon>
            : <Icon className='wish-icon-selected' onClick={handleSelectWish}>favorite</Icon>
        }
      </div>
      <Rating
          className='product-rating'
          size='small'
          name="read-only"
          value={data.rating} readOnly />
      <div className="price-tag">{toCurreny(data.sellingPrice)}</div>
    </div>}
  </div>
}

export default ProductCard