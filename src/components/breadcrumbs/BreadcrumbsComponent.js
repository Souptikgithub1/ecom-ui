import React from 'react';
import './Breadcrumbs.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Divider from "../divider-component/Divider";

const data = ['Home', 'Electronics', 'Mobiles', 'OPPO']

const BreadcrumbsComponent = () => {
    return <div className='breadcrumbs-container'>
        {data.map((item, index) => {
            return <div className="breadcrumb-container" key={index}>
                <div className='breadcrumb-div' >{item}</div>
                <ArrowForwardIosIcon className='breadcrumb-icon' />
            </div>
        })}

    </div>
}

export default BreadcrumbsComponent