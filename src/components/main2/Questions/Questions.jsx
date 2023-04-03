import React from 'react'
import css from './Questions.module.css'
import question from '../../../images/Question.svg'
import FaqsCard from '../FaqsCard/FaqsCard'
import { FaqsConst } from '../../../Constants/Faqs';

function Questions() {
    return (
        <div className='container'>
            <div className={css.wrapper} >
                <div className={css.left}>
                    <div className='Services'>
                        <p className='serv'>FAQS</p>
                        <h1 className='prov'>Frequently Asked Questions</h1>
                    </div>
                    {
                        FaqsConst.map((item) => <FaqsCard key={item.id} {...item} />)
                    }
                </div>
                <div className={css.right}>
                    <img src={question} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Questions