import React from 'react';
import groom from '../images/plamen1.jpg';
import bride from '../images/dani1.jpg';
import milena from '../images/milena.png';
import marto from '../images/marto.jpg';
import brideback from '../images/brideback.jpg';
const Invitation = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="heading">
                            <p>В ден благословен съдбата нас събра и животът ни изпълни се от Любовта. С криле дарени, за да полетим решихме остатъка от дните си да споделим. Към нашият празник се присъединете, денят ни сватбен увежете и нашата покана приемете!</p>
                        </div>

                        <div className="heading">
                            <h3>Младоженци</h3>
                        </div>
                        <div className="couple-wrap">
                            <div className="couple-half">
                                <div className="groom">
                                    <img src={groom} style={{backgroundImage: `url(${brideback})`, backgroundSize: 'cover',
    backgroundRepeat: "no-repeat"}}  alt="groom" />
                                </div>
                                <div className="desc-groom">
                                    <h3>Пламен Петков</h3>
                                </div>
                            </div>
                            <p className="center-text heartp">
                                <svg className="heart" viewBox="0 0 32 29.6">
                                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                                </svg>
                            </p>
                            <div className="couple-half">
                                <div className="bride">
                                    <img src={bride} alt="bride" />
                                </div>
                                <div className="desc-bride">
                                    <h3>Даяна Георгиева</h3>
                                </div>
                            </div>
                        </div>
                        <div className="heading">
                            <h3>Кумуват</h3>
                        </div>
                        <div className="couple-wrap">
                            <div className="couple-half">
                                <div className="groom">
                                    <img src={milena} style={{backgroundImage: `url(${brideback})`, backgroundSize: 'cover',
    backgroundRepeat: "no-repeat"}}  alt="groom" />
                                </div>
                                <div className="desc-groom">
                                    <h3>Милена Христова</h3>
                                </div>
                            </div>
                            <div className="couple-half">
                                <div className="bride">
                                    <img src={marto} alt="bride" />
                                </div>
                                <div className="desc-bride">
                                    <h3>Мартин Славов</h3>
                                </div>
                            </div>
                        </div>
                        <div className="heading">
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Invitation;