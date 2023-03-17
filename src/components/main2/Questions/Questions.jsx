import React from 'react'
import css from './Questions.module.css'
import plus from '../../../images/plus.jpg'
import question from '../../../images/Question.svg'


function Questions() {
    return (
        <div className='container'>
            {/* <div className='Services'>
                <p className='serv'>FAQS</p>
                <h1 className='prov'>Frequently Asked Questions</h1>
            </div> */}
            <div className={css.all} >
                <div className={css.left}>
                <div className='Services'>
                <p className='serv'>FAQS</p>
                <h1 className='prov'>Frequently Asked Questions</h1>
            </div>
                    <div className={css.block1}>
                        <div className={css.first}>
                            <p className={css.text1}>Sed augue ipsum, egestas nec, vestibulum et</p>
                            <img src={plus} alt="" className={css.plus} />
                        </div>
                        <p className={css.text2}>
                            Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate <br />
                            arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                        </p>
                    </div>

                    <div className={css.block}>
                        <div className={css.first}>
                            <p className={css.text1}>Malesuada adipiscing, dui vestibulum suscipit nulla quis.</p>
                            <img src={plus} alt="" className={css.plus} />
                        </div>
                    </div>

                    <div className={css.block}>
                        <div className={css.first}>
                            <p className={css.text1}>Ut varius tincidunt libero.</p>
                            <img src={plus} alt="" className={css.plus} />
                        </div>
                       
                    </div>

                    <div className={css.block}>
                        <div className={css.first}>
                            <p className={css.text1}>In ut quam vitae odio lacinia tincidunt.</p>
                            <img src={plus} alt="" className={css.plus} />
                        </div>
                       
                    </div>

                    <div className={css.block}>
                        <div className={css.first}>
                            <p className={css.text1}>Fusce vel dui Morbi nec metus.</p>
                            <img src={plus} alt="" className={css.plus} />
                        </div>
                        
                    </div>

                </div>
                <div className={css.right}>
                    <img src={question} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Questions