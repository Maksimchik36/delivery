import React from 'react';
import styles from './ProductCard.module.scss';
import Button from '../Button';


const ProductCard = () => {
    return (
        <div className={styles.wrapper}>
            <img src="https://via.placeholder.com/200x100/258DC8/E0F6FD" alt="product" />
            <p>Product</p>
            <Button title="Add to cart"></Button>
        </div>
    )
}


export default ProductCard;