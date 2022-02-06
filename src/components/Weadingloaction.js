import React from 'react';

const Weadingloaction = () => {
	return (<section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">

					<div className="heading">
						<h2 className="title">Сватбена програма</h2>
						<p>*часовете може да се променят: следете сайта</p>
						<span className="heading-bottom"><i className="icon icon-star"></i></span>
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
							<h4 className="title">Сватбена церемония</h4>
							<p>12:00</p>
						</div>

						<div className="w-detail left">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">Коктейл</h4>
							<p>14:00</p>
						</div>

						<div className="w-detail right">
							<i className="icon icon-cake"></i>
							<h4 className="title">Празненство</h4>
							<p>18:00</p>
						</div>

						<div className="w-detail left">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">Вечеря</h4>
							<p>От 20:00 нататък...</p>
						</div>

					</div>

				</div>
			</div>
		</div>
	</section>
	);
}

export default Weadingloaction;