import React, { useState } from 'react'
import css from './Case.module.css'
import bank from '../../../images/bank.jpg'
import seoL from '../../../images/seoL.jpg'
import gillette from '../../../images/Gillette.svg'
import louise from '../../../images/louise.svg'
import arrow from '../../../Main2/MeetTeam/images/OVERLAY COLOR.svg'
import theme from "../../../global/theme";

function Case() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
    return (
        <div className={`${css.wrapper} ${isDarkMode ? 'dark' : css.wrapper}`}>
            <div className={`${'container'} ${isDarkMode ? 'dark' : 'container'}`}>
                <div className='Services'>
                    <p className='serv'>Our Work</p>
                    <h1 className='prov'>Case Studies</h1>
                </div>

                <div>
                    <div className={css.case}>
                        <a href="/caseStudiesDetail">
                            <div className={css.left}>
                                <p>MARKETING</p>
                                <h3>General Electric</h3>
                            </div>
                        </a>
                        <div className={css.center}>
                            <a href="/caseStudiesDetail">
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
                            </a>
                            <a href="/caseStudiesDetail">
                                <div className={css.div}>
                                    <img src={gillette} alt="" className={css.image} />
                                    {/* <p>adjn</p> */}
                                    <div className={css.box}>
                                        <img src={louise} alt="" className={css.img1} id={css.id} />
                                        <div className={css.text}>
                                            <div>
                                                <p className={css.p}>SOCIAL</p>
                                                <h1 className={css.h1}>Louis Vuitton</h1>
                                            </div>
                                            <p className={css.disc}>Quisque id odio. Nunc egestas, <br /> augue at pellentesque laoreet, <br /> felis eros vehicul</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <a href="/caseStudiesDetail">
                            <div className={css.right}>
                                <p>WEB</p>
                                <h3>Gillette</h3>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <div className={css.arrow}>
                <a href="/caseStudies">View All</a>
                <img src={arrow} alt="" />
            </div>
        </div>
    )
}

export default Case