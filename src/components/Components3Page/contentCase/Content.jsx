import React from 'react'
import css from './Content.module.css'
function Content(props) {
    return (
        <div className={css.wrp}>
            <div className={css.content}>
                <img src={props.image} alt="" />
                <p>{props.type}</p>
                <b>{props.b1} </b>
                <b >{props.b2}</b>
            </div>
        </div>
    )
}

export default Content