import React from 'react';
import './Breadcrumbs.css';

const data = ['Home', 'Electronics', 'Mobiles', 'OPPO']

const BreadcrumbsContainer = () => {
    return <div className='breadcrumbs-container'>
        {data.map((item, index) => {
            return <div className="breadcrumb-container" key={index}>
                <div className='breadcrumb-div' >{item}</div>
                <div className="breadcrumb-icon">></div>
            </div>
        })}
    </div>
}

export default BreadcrumbsContainer