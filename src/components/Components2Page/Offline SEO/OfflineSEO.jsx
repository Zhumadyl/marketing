import React from 'react'
import Artboard8 from '../../../assets/Artboard8.png'
import ellipse10 from '../../../assets/Ellipse10.svg'
import classNames from 'classnames';
import css from './Offline.module.css'
function OfflineSEO() {
    return (
        <div className={css.wrapper}>
            <div className={classNames('container', 'flex')}>
                <div>
                    <img src={Artboard8} alt="" />
                </div>
                <div className={css.content}>
                    <h1>Offline SEO</h1>
                    <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nunc nonummy metus. Donec elit libero, sodales nec</p>
                    <div className='flex'>
                        <img src={ellipse10} alt="" />
                        <b>First Class Flights</b>
                    </div>
                    <div className='flex'>
                        <img src={ellipse10} alt="" />
                        <b>First Class Flights</b>
                    </div>
                    <div className='flex'>
                        <img src={ellipse10} alt="" />
                        <b>First Class Flights</b>
                    </div>
                    <div className='flex' id={css.lastDiv}>
                        <img src={ellipse10} alt="" />
                        <b>First Class Flights</b>
                    </div>
                    <button className='flex' >
                        Check Our Work
                        <img src='https://cdn-icons-png.flaticon.com/512/2989/2989981.png' width='15px' alt="" />

                    </button>
                </div>
            </div>
        </div>
    )
}

export default OfflineSEO