import React, {useState} from 'react'
import './ProductCarousel.css'
import ProductCard from "../product-card/ProductCard";
import Divider from "../divider-component/Divider";
import ModalComponent from "../modal-component/ModalComponent";
import ProductSummaryQv from "../product-summary-qv/ProductSummaryQv";

const ProductCarousel = ({headerName, type}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [quickviewProduct, setQuickviewProduct] = useState(null);

    return <div className='product-carousel-container'>
        <div className='divider-container'><Divider /></div>
        <div className='product-carousel-header'>{headerName}</div>
        <div className='carousel-product-list-container'>
            {[...new Array(6)]
                .map((x, i) => <ProductCard
                    id={i+1}
                    setModalOpen={setModalOpen}
                    setQuickviewProduct={setQuickviewProduct}
                    key={i}
                    type={type} />)}
        </div>

        <ModalComponent
            open={modalOpen}
            setOpen={setModalOpen} >
                <ProductSummaryQv
                    quickviewProduct={quickviewProduct} />
        </ModalComponent>
    </div>
}

export default ProductCarousel