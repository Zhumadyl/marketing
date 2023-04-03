import { imageListClasses } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import css from './FaqsCard.module.css'
import plus from '../../../images/plus.jpg'
import minus from '../../../images/minus.jpg'


function FaqsCard({ title, discription}) {
    const [active, setActive] = useState(false)
    return (
        <div className={css.card} onClick={()=> setActive(!active)}>
            <div className={css.top}>
            <h1>{title}</h1>
            <div>
                    {!active ? <img src={plus} alt='' /> : <img src={minus} alt=''/>}
                </div>
            </div>
            {active && <p>{discription}</p>}
        </div>
    );
}

export default FaqsCard;