import css from './Card.module.css'
import React from 'react';
import facebook from '../../assets/facebook.svg'
import inn from '../../assets/inli.svg'
import inst from '../../assets/instagram.svg'
import twitter from '../../assets/tweeter.svg'


function Card({ img }) {
    return (
        <div className={css.card}>
            <div className={css.shadow}>
            <img src={img} alt="" />
            </div>
            <div className={css.social}>
                <img src={facebook} alt="" />
                <img src={inst} alt="" />
                <img src={inn} alt="" />
                <img src={twitter} alt="" />
            </div>
            <div className={css.name}>
                <h1>Eleanor Pena</h1>
                <p>Marketing</p>
            </div>
        </div>
    );
}

export default Card;