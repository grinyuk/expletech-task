import React from 'react';

const Product = ({product}) => {
    return (
        <div>
            <p>{product.title}</p>
        </div>
    );
};

export {Product};