import React from 'react';
import styles from './ProductCard.module.scss';
import Button from '../Button';


const ProductCard = ({id, name, image}) => {
    return (
        <div className={styles.wrapper} id={id}>
            <img className={styles.photo} src={image} alt={name} />
            <p className={styles.name}>{name}</p>
            <Button title="Add to cart"></Button>
        </div>
    )
}


export default ProductCard;