import React from 'react';
import ReactPlayer from "react-player";
import '../OurStory.css';
import left from '../images/met2.jpg'
import right from '../images/met4.PNG'
import kiss from '../images/kiss.mp4'
const WeadingDetails = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <h4 className="title margin-bottom">Нашата история</h4>
                            <h5 className="title margin-bottom text-center format-story">"Да Обичаш и да бъдеш Обичан…"</h5>
                            {/* <p>"Най-великото нещо на света е да обичаш и да бъдеш обичан!"</p> */}
                            <div className="container format-story">
                                <p className="format-story">
                                    Против на очакванията, тази любов започва в едни от най-студените месеци на годината, а имено зимните. Докато Даяна е в разгара на кариерния си път, работейки 24/7, Пламен бе готов да промени живота си и да отгърне следващата глава. Въпреки това и двамата не подозират за последствията от тази любовна еуфория.
                                    На първата им среща, щом Пламен вижда усмивката на Даяна, очите му и цялото му изражение се изпълват с топлина. Иска ми се да кажа, че е имало любовни искри, влажни очи и пеперуди в стомаха, но те идват в по-късен етап, и то в какви количества само…
                                    Срещайки се двамата, преоткриват баланса във всяко едно начинание - работа, любов, лично времe. Някак двамата заедно, те са по-добри хора и по-добрата версия на самите себе си. Красиво нали!?
                                    Красива беше и първата им целувка, в една студена и снежна февруарска вечер, която отключва сърцата и на двамата.
                                    До тук звучи като история от приказките, но като всяка двойка и те имат своите падения и прогреси. Може би това е направило любовта им толкова силна..

                                    Години по-късно, ето ги и тях, сгодени, влюбени до костите си и обичащи се от дъното на душата си - Даяна и Пламен. Всеки ден щом ръцете им се вплетът едни в други, кожата настръхва, а думите сякаш крещят в ушите им - обичам те, обичам те, обичам те,….
                                    Това са те, Пламен и Даяна - готови да покажат любовта си пред най-близките хора и да се врекът в любов и вярност. Това е началото на една нова глава за -
                                    “да Обичаш и да бъдеш Обичан…”.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="couple-wrap">
                        <div className="couple-third ">
                            <div className="groom">
                                <img src={left} alt="groom" className="img-responsive" />
                            </div>
                        </div>
                        <div className="couple-third ">
                            <div className="bride">
                                <ReactPlayer url={kiss} width="75%" height="75%" style={{'marginLeft': '13%'}} controls={true} />
                            </div>
                        </div>
                        <div className="couple-third ">
                            <div className="bride">
                                <img src={right} alt="bride" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading">
                    <span className="heading-bottom"><i className="icon icon-star"></i></span>
                </div>
            </div>
        </section>
    );
}

export default WeadingDetails;