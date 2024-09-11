import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Products from './Components/Products/Products.jsx';
import Title from './Components/Title/Title.jsx';
import Feature from './Components/Feature/Feature.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Advantages from './Components/Advantages/Advantages.jsx';
import WhyOutworking from './Components/whyOutworking/whyOutworking.jsx';
// import Form from './Components/Form/Form.jsx';


const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<div className='container'>
				<Title />
				<Products />
				<Feature />
				<Advantages />
				<WhyOutworking />
				<Contact />
        {/* <Form/> */}
			</div>
		</div>
	);
};

export default App;
