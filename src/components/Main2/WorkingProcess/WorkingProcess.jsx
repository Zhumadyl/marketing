import React from 'react'
import css from './WorkingProcess.module.css'
import Icon1 from '../../../assets/workIcon.svg'
import Icon2 from '../../../assets/workIcon2.svg'
import Icon3 from '../../../assets/workIcon3.svg'
import Icon4 from '../../../assets/workIcon4.svg'



function WorkingProcess() {
    return (
        <div className='container'>
            <div className={css.wrapper}>
                <b>Work Flow</b>
                <h1>Working Process</h1>
                <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. </p>
                <div className='flex'>
                    <div className={css.block1}>
                        <img src={Icon1} alt="" width='80px' />
                        <div className='flex'>
                            <p>Planning</p>
                            <img src='https://img.icons8.com/ios-glyphs/512/arrow.png' alt="" width='60px' height='30px' />
                        </div>
                    </div>
                    <div className={css.block2}>
                        <img src={Icon2} alt="" width='80px' />
                        <div className='flex'>
                            <p>Research</p>
                            <img src='https://img.icons8.com/ios-glyphs/512/arrow.png' alt="" width='60px' height='30px' />
                        </div>
                    </div>
                    <div className={css.block3}>
                        <img src={Icon3} alt="" width='80px' />
                        <div className='flex'>
                            <p>Optimizing</p>
                            <img src='https://img.icons8.com/ios-glyphs/512/arrow.png' alt="" width='60px' height='30px' />
                        </div>
                    </div>
                    <div className={css.block4}>
                        <img src={Icon4} alt="" width='80px' />
                        <div className='flex'>
                            <p>Results</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkingProcess