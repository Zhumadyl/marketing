import React, { useState } from 'react'
import css from './Questions.module.css'
import plus from '../../../images/plus.jpg'
import plusD from '../../../assets/plusD.png'
import question from '../../../images/Question.svg'
import theme from "../../../global/theme";


function Questions() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);

    return (
        <div className={`${'container'} ${isDarkMode ? 'dark' : 'container'}`}>
            {/* <div className='Services'>
                <p className='serv'>FAQS</p>
                <h1 className='prov'>Frequently Asked Questions</h1>
            </div> */}
            <div className={css.all} >
                <div className={css.left}>
                    <div className='Services'>
                        <p className='serv'>FAQ</p>
                        <h1 className='prov'>Frequently Asked Questions</h1>
                    </div>
                    <div className={`${css.block1} ${isDarkMode ? css.block1d : css.block1}`} style={{backgroundColor: isDarkMode ? '#212B36' : 'white'}}>
                        <div className={css.first}>
                            <p className={css.text1} style={{color: isDarkMode ? 'white' : '#212B36'}}>Sed augue ipsum, egestas nec, vestibulum et</p>
                            <img src={plus} alt="" className={css.plus} style={{display: isDarkMode ? 'none' : 'black'}} />
                            <img src={plusD} alt=""  className={`${css.plus} ${css.plusD}`} style={{display: isDarkMode ? 'block' : 'none'}} />
                        </div>
                        <p className={css.text2} style={{color: isDarkMode ? 'white' : '#212B36'}}>
                            Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate <br />
                            arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                        </p>
                    </div>

                    <div className={css.block}>
                        <div className={css.first}>
                            <p className={css.text1} style={{color: isDarkMode ? 'white' : '#212B36'}}>Malesuada adipiscing, dui vestibulum suscipit nulla quis.</p>
                            <img src={plus} alt="" className={css.plus} style={{display: isDarkMode ? 'none' : 'black'}} />
                            <img src={plusD} alt=""  className={`${css.plus} ${css.plusD}`} style={{display: isDarkMode ? 'block' : 'none'}} />
                        </div>
                    </div>

                    <div className={css.block}>
                        <div className={css.first}>
                            <p className={css.text1} style={{color: isDarkMode ? 'white' : '#212B36'}}>Ut varius tincidunt libero.</p>
                            <img src={plus} alt="" className={css.plus} style={{display: isDarkMode ? 'none' : 'black'}} />
                            <img src={plusD} alt=""  className={`${css.plus} ${css.plusD}`} style={{display: isDarkMode ? 'block' : 'none'}} />

                        </div>

                    </div>

                    <div className={css.block}>
                        <div className={css.first}>
                            <p className={css.text1 } style={{color: isDarkMode ? 'white' : '#212B36'}}>In ut quam vitae odio lacinia tincidunt.</p>
                            <img src={plus} alt="" className={css.plus} style={{display: isDarkMode ? 'none' : 'black'}} />
                            <img src={plusD} alt=""  className={`${css.plus} ${css.plusD}`} style={{display: isDarkMode ? 'block' : 'none'}} />
                        </div>

                    </div>

                    <div className={css.block}>
                        <div className={css.first}>
                            <p className={css.text1} style={{color: isDarkMode ? 'white' : '#212B36'}}>Fusce vel dui Morbi nec metus.</p>
                            <img src={plus} alt="" className={css.plus} style={{display: isDarkMode ? 'none' : 'black'}} />
                            <img src={plusD} alt=""  className={`${css.plus} ${css.plusD}`} style={{display: isDarkMode ? 'block' : 'none'}} />
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