import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from '../ProductModal/ProductModal.module.css'
import {closeModal} from "../../storage/slices/modal.slice";

const ProductModal = () => {
    const {product} = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();

    return (
        <div className={css.overlay}>
            <div className={css.modal}>
                <div className="d-flex justify-content-between">
                    <h4>{product.title}</h4>
                    <button
                        type="button"
                        className={css.closeBtn}
                        onClick={() => dispatch(closeModal())}
                    >X</button>
                </div>
                <p>${product.price.toFixed(2)}</p>
                <img className={css.thumbnail} alt={product.title} src={product.thumbnail} />
                <p className={css.description}>{product.description}</p>
            </div>
        </div>
    );
};

export {ProductModal};