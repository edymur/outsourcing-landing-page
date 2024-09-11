import React from 'react';
import './WhyOutworking.css';
import statistic_icon from './../../assets/statistic_icon.svg';
import thumb_icon from './../../assets/thumb_icon.svg';
import team_icon from './../../assets/team_icon.svg';

const WhyOutworking = () => {
	return (
		<>
			<div className='title'>
				<b>Dlaczego Outworking jako dostawca usług outsourcingowych?</b>
			</div>
			<div className='whyOutworking'>
				<div className='whyText'>
					Precyzyjne rozwiązania dla Twojego biznesu to nasza misja. Badamy
					potrzeby i oczekiwania klientów, dokładnie analizujemy ich sytuację,
					aby zaproponować rozwiązania, które są godne ich firmy. Nasze
					podejście do outsourcingu opiera się na 12-letnim doświadczeniu, w
					trakcie którego obsłużyliśmy ponad 2000 zadowolonych klientów. To
					właśnie dzięki temu doświadczeniu jesteśmy w stanie dostarczać usługi
					najwyższej jakości, które wspierają rozwój i efektywność naszych
					partnerów biznesowych.
				</div>

				<div className='stat_section'>
					<div className='stat_item'>
						<img src={statistic_icon} alt='Zadowoleni klienci' />
						<h3>12</h3>
						<p>Lat na rynku</p>
					</div>
					<div className='stat_item'>
						<img src={thumb_icon} alt='Zadowoleni klienci' />
						<h3>2000 +</h3>
						<p>Zadowolonych klientów</p>
					</div>
					<div className='stat_item'>
						<img src={team_icon} alt='Zadowoleni klienci' />
						<h3>70 +</h3>
						<p>Osób w naszym zespole</p>
					</div>
				</div>
				<div />
			</div>
		</>
	);
};

export default WhyOutworking;
