import React from 'react';

const Weadingloaction = () => {
	return (<section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">

					<div className="heading">
						<h4 className="title">Сватбена програма</h4>
						<p>*часовете може да се променят, следете сайта</p>
					</div>

					<div className="wedding-details margin-bottom">

						<div className="w-detail left">
							<p>Винен и СПА комплекс "Старосел"</p>
							<div className="map-responsive">
								<iframe title="wedding-spot" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAHIzxQ8bcFCoEiSQr1RsFzGK9bKEJpI_A&q=Starosel+Winery/@42.4950394,24.5574028,15z" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
							</div>
						</div>
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">Изнесен ритуал</h4>
							<h4 style={{'font-style': 'italic', 'font-size': '1em'}}>Във винарната на Старосел</h4>
							<p>16:00</p>
						</div>

						<div className="w-detail left">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">Welcome drink и приемане на поздравления</h4>
							<p>17:00</p>
						</div>

						<div className="w-detail right">
							<i className="icon icon-cake"></i>
							<h4 className="title">Начало на сватбеното тържество</h4>
							<h4 style={{'font-style': 'italic', 'font-size': '1em'}}>В зала Орфей</h4>
							<p>19:00</p>
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

export default Weadingloaction;