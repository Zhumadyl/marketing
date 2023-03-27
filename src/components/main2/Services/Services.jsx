import React from 'react'
import css from './Services.module.css'
import seo from '../../../images/seo.svg'
import search from '../../../images/search.png'
import social from '../../../images/social.svg'
import strelka from '../../../images/strelka.png'
import email from '../../../images/email.svg'


function Services() {
    return (
        <div className={css.wrapper}>
            <div className='container'>
                <div className='Services'>
                    <div className={css.weProvide}>
                        <p className='serv'>Our Services</p>
                        <h1 className='prov'>We Provide</h1>
                        <p className='p'>Nunc nonummy metus. Donec elit libero, sodales nec, <br /> volutpat a, suscipit non, turpis.</p>
                    </div>

                    <div className={css.services}>
                        <div className={css.zero}>
                            <img src={seo} alt="" />
                            <h1 className={css.h1}>SEO</h1>
                            <p className={css.p1}>Nunc nonummy metus. <br /> Donec elit libero</p>
                            <img src={strelka} alt="" />
                        </div>
                        <div className={css.first}>
                            <img src={email} alt="" />
                            <h1 className={css.h1}>Email Marketing</h1>
                            <p className={css.p1}>Nunc nonummy metus. <br /> Donec elit libero</p>
                            <img src={strelka} alt="" />
                        </div>
                        <div className={css.second}>
                            <img src={search} alt="" />
                            <h1 className={css.h1}>Search Engine <br /> Oprimization</h1>
                            <p className={css.p1}>Nunc nonummy metus. <br /> Donec elit libero</p>
                            <img src={strelka} alt="" />
                        </div>
                        <div className={css.thirst}>
                            <img src={social} alt="" />
                            <h1 className={css.h1}> Social Marketing</h1>
                            <p className={css.p1}>Nunc nonummy metus. <br /> Donec elit libero</p>
                            <img src={strelka} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services