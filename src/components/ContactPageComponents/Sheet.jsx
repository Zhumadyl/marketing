import React, { useState } from "react";
import css from './Sheet.module.css'
import contact from '../../assets/contact.png'
import pin from '../../assets/ic_pin2.svg'
import locationD from '../../assets/locationD.svg'
import mobile from '../../assets/ic_mobile.svg'
import phone from '../../assets/phoneD.svg'
import email from '../../assets/ic_email.svg'
import mail from '../../assets/mail.svg'
import "rc-slider/assets/index.css";
import "./RangeSlider.css";
import clock from '../../assets/ic_clock.svg'
import clockD from '../../assets/clockD.svg'
import Slider from "rc-slider";
import theme from "../../global/theme";
import mark from '../../assets/mark.svg'


function Sheet() {
    const [isDarkMode, setIsDarkMode] = useState(theme.isDarkMode);
    const [value, setValue] = useState([20, 80]);
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);


    const handleClick1 = () => {
        setIsClicked1(!isClicked1);
    };

    const handleClick2 = () => {
        setIsClicked2(!isClicked2);
    };

    const handleClick3 = () => {
        setIsClicked3(!isClicked3);
    };
    const handleClick4 = () => {
        setIsClicked4(!isClicked4);
    };

    const buttonStyles = {
        padding: "4px 16px",
        background: "#212B36",
        color: "white",
        border: "1px solid rgba(145, 158, 171, 0.32)",
        borderRadius: "8px",
    };

    const buttonStylesClicked = {
        padding: "4px 16px",
        background: "white",
        color: "#637381",
        border: "1px solid rgba(145, 158, 171, 0.32)",
        borderRadius: "5px",
        cursor: "pointer"
    };

    return (
        <div className={`${'container'} ${isDarkMode ? 'dark' : ''}`}>
            <div className={css.wrapper}>
                <div className={css.leftPart}>
                    <img src={contact} alt="" />
                    <div className={css.flexer}>
                        <img src={pin} alt="" style={{display : isDarkMode ? 'none' : 'block'}}/>
                        <img src={locationD} alt="" style={{display : isDarkMode ? 'block' : 'none'}}/>
                        <div>
                            <div className='flex' style={{justifyContent: 'start'}}>
                                <b>Visit us</b>
                                <img src={mark} alt="" />
                            </div>
                            <h4 style={{color: isDarkMode ? 'white' : '#212B36'}}>508 Bridle Avenue Newnan, GA 30263</h4>
                        </div>
                    </div>
                    <div className={css.flexer}>
                        <img src={mobile} alt="" style={{display : isDarkMode ? 'none' : 'block'}} />
                        <img src={phone} alt="" style={{display : isDarkMode ? 'block' : 'none'}}/>
                        <div>
                            <b>Call us</b>
                            <h4 style={{color: isDarkMode ? 'white' : '#212B36'}}>(319) 555-0115</h4>
                        </div>
                    </div>
                    <div className={css.flexer}>
                        <img src={email} alt="" style={{display : isDarkMode ? 'none' : 'block'}} />
                        <img src={mail} alt="" style={{display : isDarkMode ? 'block' : 'none'}}/>
                        <div>
                            <b>Talk to us</b>
                            <h4 style={{color: isDarkMode ? 'white' : '#212B36'}}>hello@example.com</h4>
                        </div>
                    </div>
                    <div className={css.flexer}>
                        <img src={clock} alt="" style={{display : isDarkMode ? 'none' : 'block'}}/>
                        <img src={clockD} alt="" style={{display : isDarkMode ? 'block' : 'none'}}/>
                        <div>
                            <b>Working Hours</b>
                            <h4 style={{color: isDarkMode ? 'white' : '#212B36'}}>Mon-Fri: 9 am — 6 pm</h4>
                        </div>
                    </div>

                </div>
                <div className={css.rightPart}>
                    <h1>Ready To Get Started?</h1>
                    <p>Services</p>
                    <div className={css.flex}>
                        <button onClick={handleClick1} style={isClicked1 ? buttonStyles : buttonStylesClicked} className={css.btn}>
                            Email marketing
                        </button>
                        <button onClick={handleClick2} style={isClicked2 ? buttonStyles : buttonStylesClicked} className={css.btn}>
                            SEO
                        </button>
                        <button onClick={handleClick4} style={isClicked4 ? buttonStyles : buttonStylesClicked} className={css.btn}>
                            Research
                        </button>
                        <button onClick={handleClick3} style={isClicked3 ? buttonStyles : buttonStylesClicked} className={css.btn}>
                            Social Marketing
                        </button>
                    </div>
                    <form action="" className={css.form}>
                        <div className={css.userData}>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <br />
                        <input type="email" name="12" id="" placeholder="Email" />
                        <br />
                        <input type="number" name="" id="" placeholder="Phone number" />
                        <br />
                        <div className={css.userData}>
                            <input type="text" placeholder="Compnany" />
                            <input type="url" name="123" id="" placeholder="Website" />
                        </div>
                        <div className={css.budget}>
                            <p>Your Budget</p>
                            <Slider
                                min={0}
                                max={10000}
                                value={value}
                                onChange={handleChange}
                                range={true}
                            />
                            <p id={css.id}>{`Value: ${value[0]}$ - ${value[1]}$`}</p>

                        </div>
                        <input type="text" name="" id={css.msg} placeholder='Message' />
                        <button>Send Request</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sheet