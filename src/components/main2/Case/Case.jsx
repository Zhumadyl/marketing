import React from 'react'
import css from './Case.module.css'
import bank from '../../../images/bank.jpg'
import seoL from '../../../images/seoL.svg'
import gillette from '../../../images/louiseSEo.svg'
import louise from '../../../images/louise.svg'
import general from '../../../images/general.svg'
import web from '../../../images/web.svg'
import arrow from '../../../images/orangeArrow.svg'


function Case() {
    return (
        
        <div className={css.wrapper}>
            <div className='container'>
                <div className='Services'>
                    <p className='serv'>Our Work</p>
                    <h1 className='prov'>Case Studies</h1>

                <div>
                    <div className={css.case}>
                        <div className={css.left}>
                            <img src={general} alt="" />
                            <div className={css.txt}>
                            <p>Marketing</p>
                            <h1>General Electric</h1>
                            </div>
                        </div>

                        <div className={css.center}>
                            <div className={css.div}>
                                <div className={css.box}>
                                    <img src={bank} alt="" />
                                    <div className={css.text}>
                                        <div>
                                            <p className={css.p}>BRANDING</p>
                                            <h1 className={css.h1}>Bank of America</h1>
                                        </div>
                                        <p className={css.disc}>Quisque id odio. Nunc egestas, <br /> braugue at pellentesque laoreet, <br /> felis eros vehicul</p>
                                    </div>
                                </div>
                                <div className={css.kv}>
                                <img src={seoL} alt="" />
                                <div className={css.txt}>
                                    <p>SEO</p>
                                    <h1>Louis Vuitton</h1>
                                </div>
                                </div>
                            </div>

                            <div className={css.div}>
                            <div className={css.kv1}>
                                <img src={gillette} alt=""  />
                                <div className={css.txt}>
                                    <p>SEO</p>
                                    <h1>Louis Vuitton</h1>
                                </div>
                                </div>

                                <div className={css.box}>
                                    <img src={louise} alt="" className={css.img1} />
                                    <div className={css.text}>
                                        <div>
                                            <p className={css.p}>SOCIAL</p>
                                            <h1 className={css.h1}>Louis Vuitton</h1>
                                        </div>
                                        <p className={css.disc}>Quisque id odio. Nunc egestas, <br /> augue at pellentesque laoreet, <br /> felis eros vehicul</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={css.right}>
                            <img src={web} alt="" />
                            <div className={css.txt}>
                            <p>Marketing</p>
                            <h1>General Electric</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={css.arrow}>
            <a>View all</a>
            <img src={arrow} alt="" />
            </div>
        </div>
        </div>

    )
}

export default Case