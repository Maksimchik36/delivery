import React, {useState} from 'react';
import styles from './ShopsPage.module.scss';
import Button from 'components/share/Button';
import ProductCard from 'components/share/ProductCard';
import { shopsData } from 'data';
import { productsData} from 'data'


const ShopsPage = () => {
    const [selectedShopProducts, setSelectedShopProducts] = useState([]);

    //get products by owner
    // onClick={() => {
    //                 const filtered = productsData.filter(el => el.owner === item.name);
    //                 setSelectedShopProducts(filtered);
    //             }}


    return (
        <section className={styles.wrapper}>
            <div className={styles.shopsWrapper}>
                {/* <p>Shops:</p> */}
                {shopsData.map(item => (<Button key={item.id} title={item.name} ariaLabel={item.name} onClick={() => {
                    const filtered = productsData.filter(el => el.owner === item.name);
                    setSelectedShopProducts(filtered);
                }} />))
                }
            </div>
            <div className={styles.cardsWrapper}>
                {/* <p>Cards:</p> */}
                {selectedShopProducts ? selectedShopProducts.map(item => (<ProductCard key={item.id} name={item.name} image={item.image} />)) : null
                }
            </div>
        </section>
    )
}


export default ShopsPage;