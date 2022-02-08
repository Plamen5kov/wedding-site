import React, { useState, useEffect } from 'react';

const GoogleForm = () => {
    const [isExpired, setIsExpired] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const countDownDate = new Date("Apr 30, 2022 12:00:00").getTime();
        const x = setInterval(() => {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const second = Math.floor((distance % (1000 * 60)) / 1000);
            if (days !== day) {
                setDays(day);
            }
            if (hours !== hour) {
                setHours(hour);
            }
            if (minutes !== minute) {
                setMinutes(minute);
            }
            if (seconds !== second) {
                setSeconds(second);
            }

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                setIsExpired(true);
            }
        }, 1000);

        return () => {
            clearInterval(x);
        }

    }, [days, hours, minutes, seconds]);

    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="heading">
                    <h4>Моля потвърдете своето присъствие като попълните анкетата до 30 април!</h4>
                    <h4>Остават:</h4>
                    <div className="remaining-time2">
                        {isExpired
                            ? <div></div>
                            :
                            <div id="clock">
                                <div className="time-sec2"><span className="title">{days}</span> Дни </div>
                                <div className="time-sec2"><span className="title">{hours}</span> Часа </div>
                                <div className="time-sec2"><span className="title">{minutes}</span> Минути </div>
                                <div className="time-sec2"><span className="title">{seconds}</span> Секунди </div>
                            </div>
                        }
                    </div>
                </div>
                {isExpired
                    ? <div>Изтекла анкета</div>
                    :
                    <a href="https://forms.gle/PqPG9siZdNc8nSaA8"><span className="form">Към Анкетата!</span></a>
                }
                <div className="heading">
                    <span className="heading-bottom"><i className="icon icon-star"></i></span>
                </div>
            </div>
        </section>
    );
}

export default GoogleForm;