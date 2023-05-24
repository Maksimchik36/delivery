import React from 'react';
import styles from './ShopsPage.module.scss';
import Button from 'components/share/Button';
import ProductCard from 'components/share/ProductCard';
import { shopsData } from 'data';


const ShopsPage = () => {


    return (
        <section className={styles.wrapper}>
            <div className={styles.shopsWrapper}>Shops:
                {shopsData.map(item => (<Button key={item.id} title={item.name} ariaLabel={item.name} onClick={() => console.log(item.name)} />))
                }
            </div>
            <div className={styles.cardsWrapper}>Cards:
                <ProductCard />
            </div>
        </section>
    )
}


export default ShopsPage;