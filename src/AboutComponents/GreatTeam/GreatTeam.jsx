import React from 'react';
import { AboutConst } from '../../Constants/AboutConst';
import css from './GreatTeam.module.css'
import Card from '../../AboutComponents/Card/Card'

 
function GreatTeam(props) {
    return (

        <div className='container'>
            <div className={css.wrapper}>
                <div className={css.title}>
                    <h1 className={css.h1}>Great Team Is The Key</h1>
                    <p className={css.p}>Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</p>
                </div>
                <div className={css.cardWrapper}>
                    {
                        AboutConst.map((item) => <Card kezy={item.id} {...item} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default GreatTeam;