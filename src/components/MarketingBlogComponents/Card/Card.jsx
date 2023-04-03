import React from 'react';
import css from './Card.module.css'

function Card({ bg, userImg, user }) {
    return (
        <div className={css.cardWrapper}>
            <img src={bg} alt="" className={css.bg}/>
            <div className={css.text}>
            <div className={css.disc}>
            <p className={css.time}>24 May 20198 min read</p>
                <h1 className={css.search}>How to design a product <br />
                    that can grow itself 10x in <br />
                    year:</h1>
            </div>
            <div className={css.user}>
                <img src={userImg} alt="" />
                <p>{user}</p>
            </div>
            </div>
        </div>
    );
}

export default Card;