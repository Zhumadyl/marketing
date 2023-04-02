import React, { useState } from 'react'
import css from './ServicesIncl.module.css'
import iconStatic from '../../../assets/iconStatic.svg'
import theme from "../../../global/theme";
import like from '../../../assets/like.png'
import checked from '../../../assets/checked.png'
import png1 from '../../../assets/png1.png'
import png2 from '../../../assets/png2.png'
import time from '../../../assets/time.png'



function ServicesIncl() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
    return (
        <div className={css.wrapper}>
            <div  className={`${'container'} ${isDarkMode ? 'dark' : 'container'}  `}>
                <h1>Services Include</h1>
                <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
                <div className={css.container}>
                    <div className={css.content}>
                        <img src={iconStatic} alt="" />
                        <br />
                        <b>Search Engine Optimization</b>
                        <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                    </div>
                    <div className={css.content}>
                        <img src={like} alt="" />
                        <br />
                        <b>Search Engine Optimization</b>
                        <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                    </div>
                    <div className={css.content}>
                        <img src={time} alt="" />
                        <br />
                        <b>Search Engine Optimization</b>
                        <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                    </div>
                    <div className={css.content}>
                        <img src={checked} alt="" />
                        <br />
                        <b>Search Engine Optimization</b>
                        <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                    </div>
                    <div className={css.content}>
                        <img src={png1} alt="" />
                        <br />
                        <b>Search Engine Optimization</b>
                        <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                    </div>
                    <div className={css.content}>
                        <img src={png2} alt="" />
                        <br />
                        <b>Search Engine Optimization</b>
                        <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesIncl