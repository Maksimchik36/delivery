import React, {useState} from 'react';
import styles from './ShoppingCartPage.module.scss';
import Button from 'components/share/Button';
// import { productsData } from 'data';


const ShoppingCartPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePhone = (e) => setPhone(e.target.value);
    const handleChangeAddress = (e) => setAddress(e.target.value);
    

    return (
        <section className={styles.wrapper}>
            <form className={styles.formWrapper} >                    
                    <label htmlFor='name'>Name</label>
                    <input id='name' name="name" value={name} onChange={handleChangeName} placeholder='Саша'  />
                    <label htmlFor='email'>Email</label>
                    <input id='email' name="email" value={email} onChange={handleChangeEmail} placeholder='Kindman2000@gmail.com' />
                    <label htmlFor='phone' >Phone</label>
                    <input id='phone' name="phone" value={phone} onChange={handleChangePhone} placeholder='+380001234567' />
                    <label htmlFor='address'>Address</label>
                    <input id='address' name="address" value={address} onChange={handleChangeAddress} placeholder='Kyiv, Central street, 10' />                    
            </form>

            {/* <ul>
                {productsData.length ? productsData.map(item => <li key={item.id}>{item.name}</li>) : null}
            </ul> */}

            <p>Total price:</p>
            <Button title='Submit'></Button>

                
        
        </section>
    )
};


export default ShoppingCartPage;