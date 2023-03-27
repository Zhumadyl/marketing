import React from 'react'
import css from './Benefits.module.css'
import benefits from '../../../assets/benefits.svg'
import point1 from '../../../assets/point1.svg'
import point2 from '../../../assets/point2.svg'
import point3 from '../../../assets/point3.svg'
import classNames from "classnames";



function Benefits() {
    return (
        <div className={css.wrapper}>
            <div className='container'>
                <h1>Benefits Achieved</h1>
                <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>

                <div className={css.flexer}>
                    <div className={css.left}>
                        <div className={css.cont1}>
                            <div className='flex'>
                                <b>Online Media Management</b>
                                <img src={point1} alt="" />
                            </div>
                            <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                        </div>
                        <div className={classNames(css.cont1, css.cont1M)}>
                            <div className='flex'>
                                <b>Online Media Management</b>
                                <img src={point2} alt="" />
                            </div>
                            <p>Suspendisse enim turpis </p>
                        </div>
                        <div className={css.cont1}>
                            <div className='flex'>
                                <b>Online Media Management</b>
                                <img src={point3} alt="" />
                            </div>
                            <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                        </div>
                    </div>
                    <div className={css.center}>
                        <img src={benefits} alt="" />
                    </div>
                    <div className={css.right}>
                        <div className={css.cont2}>
                            <div className='flex'>
                                <img src={point3} alt="" />
                                <b>Online Media Management</b>
                                
                            </div>
                            <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                        </div>
                        <div className={classNames(css.cont2, css.cont2M)}>
                            <div className='flex'>
                                
                                <img src={point2} alt=""  />
                                <b>Online Media Management</b>
                                
                            </div>
                            <p>Suspendisse enim turpis </p>
                        </div>
                        <div className={css.cont2}>
                            <div className='flex'>
                                <img src={point1} alt="" />
                                <b>Online Media Management</b>
                                
                            </div>
                            <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits