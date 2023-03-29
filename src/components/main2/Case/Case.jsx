import React from 'react'
import css from './Case.module.css'
import bank from '../../../images/bank.jpg'
import seoL from '../../../images/seoL.jpg'
import gillette from '../../../images/Gillette.svg'
import louise from '../../../images/louise.svg'


function Case() {
    return (
        <div className={css.wrapper}>
            <div className='container'>
                <div className='Services'>
                    <p className='serv'>Our Work</p>
                    <h1 className='prov'>Case Studies</h1>
                </div>

                <div>
                    <div className={css.case}>
                        <div className={css.left}>

                        </div>

                        <div className={css.center}>
                            <div className={css.div}>
                                <div className={css.box}>
                                    <img src={bank} alt="" className={css.img1} />
                                    <div className={css.text}>
                                        <div>
                                            <p className={css.p}>BRANDING</p>
                                            <h1 className={css.h1}>Bank of America</h1>
                                        </div>
                                        <p className={css.disc}>Quisque id odio. Nunc egestas, <br /> braugue at pellentesque laoreet, <br /> felis eros vehicul</p>
                                    </div>
                                </div>
                                <img src={seoL} alt="" className={css.img} />
                            </div>

                            <div className={css.div}>
                                <img src={gillette} alt="" className={css.image} />
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

                        </div>

                    </div>
                </div>
            </div>
            <a href="/caseStudies">View All</a>
        </div>
    )
}

export default Case