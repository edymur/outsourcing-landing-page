import React, { useState } from 'react';
import './Contact.css';
import msg_icon from './../../assets/msg_icon.svg';
import mail_icon from './../../assets/mail_icon.svg';
import location_icon from './../../assets/location_icon.svg';
import phone_icon from './../../assets/phone_icon.svg';
import close from './../../assets/close.svg';

const Contact = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleButtonClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            <div className='title'>
                <b>Outworking - jesteśmy tu dla Ciebie</b>
            </div>
            <div className='contact'>
                <div className='contact-col'>
                    <h3>
                        Napisz do nas!
                        <img src={msg_icon} alt='ikona dymka czatu' />
                    </h3>
                    <p>
                        Szukasz wsparcia w obszarze outsourcingu? Chętnie pomożemy!
                        Skontaktuj się z nami, a nasi specjaliści odpowiedzą na wszystkie
                        Twoje pytania i przedstawią najlepsze rozwiązania dla Twojej firmy.
                    </p>
                    <div className='form-container'>
                        <button className='button' onClick={handleButtonClick}>
                            Skontaktuj się z nami!
                        </button>
                    </div>
                    {isPopupVisible && (
                        <div className='popup' style={{ display: 'flex' }}>
                            <div className='popup-content'>
                                <form className='form'>
                                    <img
                                        src={close}
                                        alt="Ikona z krzyżykiem w kółku"
                                        className="close"
                                        onClick={handleClosePopup}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <label>Imię i nazwisko</label>
                                    <input type='text' name='name' placeholder='' required />
                                    <label>Firma</label>
                                    <input type='text' name='company name' placeholder='' required />
                                    <label>Numer telefonu</label>
                                    <input type='tel' name='phone' placeholder='' required />
                                    <label>E-mail</label>
                                    <input type='email' id='email' name='email' />
                                    <textarea
                                        name='message'
                                        rows='6'
                                        placeholder='Wiadomość..'
                                        required></textarea>
                                    <button type='submit' className='btn'>
                                        Wyślij
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    <ul>
                        <li>
                            <img src={phone_icon} alt='ikona telefonu' />
                            61 861 45 00
                        </li>
                        <li>
                            <img src={mail_icon} alt='ikona koperty' />
                            biuro@outworking</li>
                        <li>
                            <img src={location_icon} alt='ikona lokalizacji' />
                            ul. Langiewicza 2/10, 61-502 Poznań
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Contact;
