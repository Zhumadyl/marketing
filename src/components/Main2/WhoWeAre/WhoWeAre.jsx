import React from 'react'
import css from './Main.module.css'
import spotify from '../../../assets/Vector.svg'
import airbnb from '../../../assets/Shape2.svg'
import slack from '../../../assets/Vector2.svg'
import vimeo from '../../../assets/Shape.svg'
import netflix from '../../../assets/Shape3.svg'
import heroku from '../../../assets/logo.svg'
import img from '../../../assets/IMG.png'
import number1 from '../../../assets/one50.png'
 
function Main() {
  return (
    <div className='container'>
        <div className={css.brands}>
            <img src={spotify} alt="" width='85px' height='25px'/>
            <img src={slack} alt="kk"  width='85px' height='25px' />
            <img src={netflix} alt="kk" width='85px' height='25px' />
            <img src={vimeo} alt="kk"  width='85px' height='25px'/>
            <img src={heroku} alt="kk"  width='85px' height='25px' />
            <img src={airbnb} alt="kk"  width='85px' height='25px' />
        </div>
        <img src={img} alt="" className='imgBig'/>
        <div className={css.aboutUs}>
            <div className={css.leftAU}> 
                <b>About Us</b>
                <h1>Who We Are</h1>
                <p>In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <button>
                Lean more
                </button>
            </div>
            <div className={css.rightAU}>
                <div className={css.flex}>
                    <div className={css.static}>
                        <img src={number1} alt="" width='83px' height='64px' />
                        <p>PROJECTS</p>
                    </div>
                    <hr id={css.hr}/>
                    <div>
                        <p>
                        Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.
                        </p>
                    </div>
                </div>
                <div className={css.flex}>
                    <div className={css.static}>
                        <img src={number1} alt="" width='83px' height='64px' />
                        <p>Happy CLIENTS</p>
                    </div>
                    <hr id={css.hr}/>
                    <div>
                        <p>
                        Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.
                        </p>
                    </div>
                </div>
                <div className={css.flex}>
                    <div className={css.static}>
                        <img src={number1} alt="" width='83px' height='64px'/>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr id={css.hr}/>
                    <div>
                        <p>
                        Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main