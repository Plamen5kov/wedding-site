import React from 'react';
import weddingLogo from '../images/starosel.png';
import '../WeadingDate.css';

const WeadingDate = () => {
    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">

                        <img className="sindur-dan" src={weddingLogo} alt="Sindur Dan"/>
                        <h5 className="date">28ми Август 2022</h5>
                        <h3 className="pre-title">Запазете датата</h3>
                        <h1 className="title">Даяна & Пламен</h1>
                   </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;