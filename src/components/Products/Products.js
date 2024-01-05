import React, {useEffect, useState} from 'react';
import {productService} from "../../services/product.service";
import {Product} from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getAll().then(data => setProducts(data.products))
    }, []);

    return (
        <div>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    );
};

export {Products};