import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home'>
                <div className='navbar-container'>
                    <div className='navbar'>
                        <div className='navbar-logo'>
                            Healthier
                        </div>
                        <div className='navbar-connect-btn'>
                            Connect
                        </div>
                    </div>
                </div>
                <div className='info-container'>
                    <div className='info'>
                        <div className='title-light'>
                            With
                            <span className='logo-'>
                                Healthier
                            </span>
                        </div>
                        <div className='title'>
                            Store Your Medical Records At A Safe Place
                        </div>
                        <div className='title-sub'>
                            A decentralized medical records storage platform that allows you to store your medical records and share them with your doctors and hospitals through QR code.
                        </div>
                        <div className='connect-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="11 17 16 12 11 7"></polyline></svg>
                            <div className='connect-btn-text'>
                                Connect
                            </div>
                        </div>
                        <div className='title-patient'>
                            <div className='title-patient-text'>
                                Are you a patient?
                            </div>
                            <div className='title-patient-btn'>
                                <Link to='/patient-signup'>
                                    Join here
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='resources-container'>
                    <div className='resources'>
                        <div className='resources-title'>
                            Built with
                        </div>
                        <div className='resource-list'>
                            <div className='resource'>
                                Blockchain
                            </div>
                            <div className='resource'>
                                Moralis
                            </div>
                            <div className='resource'>
                                Web3
                            </div>
                            <div className='resource'>
                                React
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
