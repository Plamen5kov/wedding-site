import React from 'react';
import '../OurStory.css';
import met2 from '../images/met2.jpg'
import met3 from '../images/met3.jpg'
import met4 from '../images/met4.JPG'
const WeadingDetails = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <span>Обичаме се!</span>
                            <h2 className="title">Нашата история:</h2>
                            <p>"Най-великото нещо на света е да обичаш и да бъдеш обичан!"</p>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box fadeInUp animated-fast">
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${met2})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Първи впечатления</h3>
                                        <span className="date">Февруари 18, 2019</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Пламен: Помня че беше студено, но забравих всичко когато я видях за пръв път!</p>
                                        <p>Даяна: ...</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${met3})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Първа среща</h3>
                                        <span className="date"><i className="icon icon-date"></i>Февруари 28, 2019</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Пламен: Още по студено докато я чаках да слезе и още по-топло когато ме държеше за ръка!</p>
                                        <p>Даяна: ...</p>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${met4})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Предложение за брак</h3>
                                        <span className="date">Февруари 28, 2020</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Пламен: Ще ми бъдеш ли жена?</p>
                                        <p>Даяна: ДА!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeadingDetails;