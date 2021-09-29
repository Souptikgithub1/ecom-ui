import React, {useState} from 'react'
import './ProductCarousel.css'
import ProductCard from "../product-card/ProductCard";
import Divider from "../divider-component/Divider";
import ModalComponent from "../modal-component/ModalComponent";
import ProductSummaryQv from "../product-summary-qv/ProductSummaryQv";

const ProductCarousel = ({dataArr, headerName, type}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [quickviewProduct, setQuickviewProduct] = useState(null);

    const handleQuickViewClose = (e) => {
        if (!e) {
            setModalOpen(e)
            setTimeout(() => {
                setQuickviewProduct(null)
            }, 300)
        }
    }

    return <div className='product-carousel-container'>
        <div className='divider-container'><Divider /></div>
        <div className='product-carousel-header'>{headerName}</div>
        <div className='carousel-product-list-container'>
            {dataArr.map((data, i) => <ProductCard
                    data={data}
                    id={i+1}
                    setModalOpen={setModalOpen}
                    setQuickviewProduct={setQuickviewProduct}
                    key={i}
                    type={type} />)}
        </div>

        {!!quickviewProduct && <ModalComponent
            open={modalOpen}
            setOpen={handleQuickViewClose} >
            <ProductSummaryQv
                quickviewProduct={quickviewProduct} />
        </ModalComponent>}
    </div>
}

export default ProductCarousel