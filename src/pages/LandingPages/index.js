import React from 'react'
import cs from 'classnames'
import Style from './landing.module.css'
import imgLanding from '../../assets/img/image/imgLanding.png'
import PhoneDash from '../../assets/img/image/phoneDash.png'
import { Link } from 'react-router-dom'
import Phone from '../../assets/img/icons/phone.png'
import Lock from '../../assets/img/icons/lock.png'
import Download from '../../assets/img/icons/download.png'
import Airbnb from '../../assets/img/icons/airbnb.png'
import Canon from '../../assets/img/icons/cannon.png'
import Dell from '../../assets/img/icons/dell.png'
import Microsoft from '../../assets/img/icons/microsoft.png'
import Dropbox from '../../assets/img/icons/dropbox.png'
import HnM from '../../assets/img/icons/hm.png'
import Ava1 from '../../assets/img/avatar/4.png'
import Ava2 from '../../assets/img/avatar/7.png'
import Ava3 from '../../assets/img/avatar/8.png'
const LandingPages = () => {
    return (
        <div>
            <div classname={Style.wrapper}>
                <div className={Style.wrapperHeader}>
                    <div className={Style.header}>
                        <p className={Style.title}>Zwallet</p>
                        <div>
                            <Link to='/login' className={cs(Style.button, Style.link, Style.blue, )}>Login</Link>
                            <Link to='/signup' className={cs(Style.button, Style.link, Style.white )}>Sign Up</Link>
                        </div>
                    </div>
                    <div className={cs(Style.headContent, Style.relative)}>
                        <div className={Style.boxheader}>
                            <div>
                                <p className={Style.big}>Awesome App For Saving <span className={Style.bigBlue}>Time.</span></p>
                            </div>
                            <p className={Style.desc}>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
                            <Link to='/signup' className={cs(Style.button, Style.link, Style.blue, )}>Try It Free</Link>
                        </div>
                        <div>
                            <img src={PhoneDash} alt="phone" className={Style.relative}/>
                        </div>
                    </div>
                </div>
                <img src={imgLanding} alt="bg" className={Style.bgHead}/>
            </div>
            {/* <div className={Style.imgWrapper}>
            </div> */}
            <div className={Style.about}>
                <div className={Style.aboutContent}>
                    <p className={Style.big}><span className={Style.bigBlue}>About</span> the Application</p>
                    <p className={Style.descBox}>We have some great features from the application and it’s totally free to use by all users around the world.</p>
                    <div className={Style.aboutBox}>
                        <div className={Style.aboutCard}>
                            <img src={Phone} alt="phone"/>
                            <p className={Style.titleDesc}>24/7 Support</p>
                            <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                        </div>
                        <div className={Style.aboutCard}>
                            <img src={Lock} alt="lock"/>
                            <p className={Style.titleDesc}>Data Privacy</p>
                            <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                        </div>
                        <div className={Style.aboutCard}>
                            <img src={Download} alt="download"/>
                            <p className={Style.titleDesc}>Easy Download</p>
                            <p>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.partner}>
                <div className={Style.partnerDesc}>
                    <p className={Style.big}>100+ <span className={Style.bigBlue}>Trusted</span> Partners.</p>
                    <p className={Style.desc}>We have reached global level and have 100+brand partners around the globe.</p>
                </div>
                <div className={Style.partnerLogo}>
                    <div className={Style.logo}>
                        <div><img src={Airbnb} alt="AirBnB" /></div>
                        <div><img src={Canon} alt="Canon" /></div>
                        <div><img src={Dell} alt="Dell" /></div>
                    </div>
                    <div className={Style.logo}>
                        <div><img src={Microsoft} alt="Microsoft" /></div>
                        <div><img src={Dropbox} alt="Dropbox" /></div>
                        <div><img src={HnM} alt="HnM" /></div>
                    </div>
                </div>
            </div>
            <div className={Style.feature}>
                <img src={PhoneDash} alt="phone" />
                <div className={Style.featureDesc}>
                    <div className={Style.featureTitle}>
                        <p className={Style.big}>All The <span className={Style.bigBlue}>Great</span> Zwallet Features.</p>
                    </div>
                    <div className={Style.featureCard}>
                        <p className={Style.small}><span className={Style.bigBlue}>1. </span>Small Fee</p>
                        <p className={Style.desc}>We only charge 5% of every success transaction done in Zwallet app.</p>
                    </div>
                    <div className={Style.featureCard}>
                        <p className={Style.small}><span className={Style.bigBlue}>2. </span>Data Secured</p>
                        <p className={Style.desc}>All your data is secured properly in our system and it’s encrypted.</p>
                    </div>
                    <div className={Style.featureCard}>
                        <p className={Style.small}><span className={Style.bigBlue}>3. </span>User Friendly</p>
                        <p className={Style.desc}>Zwallet come up with modern and sleek design and not complicated.</p>
                    </div>
                </div>
            </div>
            <div className={Style.testimony}>
                <div className={Style.aboutContent}>
                    <p className={Style.big}>What Users are <span className={Style.bigBlue}>Saying.</span></p>
                    <p className={Style.descBox}>We have some great features from the application and it’s totally free to use by all users around the world.</p>
                    <div className={Style.aboutBox}>
                        <div className={Style.aboutCard}>
                            <img src={Ava1} alt="phone"/>
                            <p className={Style.titleDesc}>Sherina Chaw</p>
                            <p>“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”</p>
                        </div>
                        <div className={Style.aboutCard}>
                            <img src={Ava2} alt="lock"/>
                            <p className={Style.titleDesc}>Jessica Mera</p>
                            <p>“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”</p>
                        </div>
                        <div className={Style.aboutCard}>
                            <img src={Ava3} alt="download"/>
                            <p className={Style.titleDesc}>Robert Chandler</p>
                            <p>“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.footer}>
                <h2>Zwallet</h2>
                <p className={Style.footerDesc}>Simplify financial needs and saving much time in banking needs with one single app.</p>
                <hr/>
                <div className={Style.footerBottom}>
                    <p>2020 Zwallet. All right reserved.</p>
                    <div className={Style.footerContact}>
                        <p>+62 5637 8882 9901</p>
                        <p>contact@zwallet.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPages
