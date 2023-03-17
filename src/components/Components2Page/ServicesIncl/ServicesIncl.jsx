import React from 'react'
import css from './ServicesIncl.module.css'
import iconStatic from '../../../assets/iconStatic.svg'

function ServicesIncl() {
  return (
    <div className={css.wrapper}>
        <div className='container'>
            <h1>Services Include</h1>
            <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
            <div className={css.container}>
                <div className={css.content}>
                    <img src={iconStatic} alt="" />
                    <b>Search Engine Optimization</b>
                    <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                </div>
                <div className={css.content}>
                    <img src={iconStatic}alt="" />
                    <b>Search Engine Optimization</b>
                    <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                </div>
                <div className={css.content}>
                    <img src={iconStatic} alt="" />
                    <b>Search Engine Optimization</b>
                    <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                </div>
                <div className={css.content}>
                    <img src={iconStatic} alt="" />
                    <b>Search Engine Optimization</b>
                    <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                </div>
                <div className={css.content}>
                    <img src={iconStatic} alt="" />
                    <b>Search Engine Optimization</b>
                    <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                </div>
                <div className={css.content}>
                    <img src={iconStatic} alt="" />
                    <b>Search Engine Optimization</b>
                    <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesIncl