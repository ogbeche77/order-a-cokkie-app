import React from 'react';
import style from './Door.module.css';
import axios from 'axios';


const Door = ({ ordered }) => {

    //Send orders to database
    async function postOrders() {
        console.log('Saving order to database...')
        const res = await axios.post('http://localhost:1337/api/order')
        console.log(res)
        console.log('Time stamp of order successfully saved to database')
        alert('Time stamp of order saved to database')

    }



    return (
        <div onClick={ordered ? postOrders : null} className={style.Door} >
            <div className={style.Door_handle} >
            </div>
        </div>
    )
}
export default Door;