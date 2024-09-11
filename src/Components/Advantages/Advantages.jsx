import React from 'react';
import './Advantages.css';

const Advantages = () => {
	return (
		<>
			<div className='title'>
				<b>Outsourcing z Outworking to gwarancja:</b>{' '}
			</div>
			<div className='advantages'>
				<div className='advantageContainer'>
					<div className='square'>
						<b>Zgodności z prawem</b>
					</div>
				</div>
                <div className='advantageContainer'>
					<div className='square'>
						<b>Oszczędności czasu</b>
					</div>
				</div>
                <div className='advantageContainer'>
					<div className='square'>
						<b>Terminowości</b>
					</div>
				</div>
                <div className='advantageContainer'>
                <div className='square'>
                    <b>Korzystania z usług specjalistów</b>
                </div>
            </div>
			</div>
		</>
	);
};

export default Advantages;
