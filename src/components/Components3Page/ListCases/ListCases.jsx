import React from 'react'
import css from './ListCases.module.css'
import img from '../../..//assets/img1.svg'
import img2 from '../../../assets/IMG.svg'
import img3 from '../../../assets/img3.png'
import img4 from '../../../assets/img4.png'
import img5 from '../../../assets/img5.png'
import img6 from '../../../assets/img6.png'
import img7 from '../../../assets/img7.png'
import img8 from '../../../assets/img8.png'
import img9 from '../../../assets/img9.png'

import Content from '../contentCase/Content'

function ListCases() {
    return (
        <div className={css.wrp}>
            <Content image={img} type='SEO' b1="Event Doesn't Have To Be Hard. Read" b2='These 7 Tips' />
            <Content image={img2} type='Branding' b1="Event Doesn't Have To Be Hard. Read" b2='These 7 Tips' />
            <Content image={img3} type='SEO' b1="Event Doesn't Have To Be Hard. Read" b2='These 7 Tips' />
            <Content image={img4} type='Digital' b1="Event Doesn't Have To Be Hard. Read" b2='These 7 Tips' />
            <Content image={img5} type='Marketing' b1="Event Doesn't Have To Be Hard. Read" b2='These 7 Tips' />
            <Content image={img6} type='SEO' b1="Event Doesn't Have To Be Hard. Read" b2='These 7 Tips' />
            <Content image={img7} type='Development' b1="Event Doesn't Have To Be Hard. Read" b2='These 7 Tips' />
            <Content image={img8} type='SEO' b1="Event Doesn't Have To Be Hard. Read" b2='These 7 Tips' />
            <Content image={img9} type='Branding' b1="Event Doesn't Have To Be Hard. Read" b2='These 7 Tips' />
        </div>
    )
}

export default ListCases