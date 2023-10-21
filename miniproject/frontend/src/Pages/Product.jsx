import React, { useContext, useEffect } from 'react'
import all_product from '../Components/Assets/all_product'
import ShopCategory from './ShopCategory'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from  '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId)); 
    useEffect( () => {console.log(productId);console.log(product)})
        return(
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}

export default Product