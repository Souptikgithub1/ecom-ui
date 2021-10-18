import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import './SellingPolicy.css';

const ProductPageSellingPolicy = () => {
  return <div>
      <div className="free-shipping selling-policy-section">
          <LocalShippingOutlinedIcon className='policy-icon' />
          <div className="policy-text-section">FREE SHIPPING</div>
      </div>
      <div className="money-back selling-policy-section">
          <MonetizationOnOutlinedIcon className='policy-icon' />
          <div className="policy-text-section">100% MONEY BACK GUARANTEE</div>
      </div>
      <div className="online-support selling-policy-section">
          <SupportAgentOutlinedIcon className='policy-icon' />
          <div className="policy-text-section">ONLINE SUPPORT 24/7</div>
      </div>
  </div>
}

export default ProductPageSellingPolicy