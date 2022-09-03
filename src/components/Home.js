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
                <div className='content-container'>
                    <div className='content'>
                        <div className='content-title'>
                            A safe, secure platform to store your medical records.
                        </div>
                        <div className='content-sub-title'>
                            Healthier has verified doctor profiles, who then add your medical records, securing them within the blockchain.
                        </div>
                        <div className='cards-container'>
                            <div className='cards'>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-image'></div>
                                        <div className='card-title'>
                                            Admins add the doctor's profile after verifying them
                                        </div>
                                        <div className='card-sub'>
                                            We are the admin, searching for verified doctors around the world and adding them to our platform. We also verify the doctor's profile. This is done in order to ensure that the doctor is a real person and that he/she is a verified doctor and there is no discrepancy.
                                        </div>
                                    </div>
                                </div>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-image'></div>
                                        <div className='card-title'>
                                            Verified doctors create patient profiles
                                        </div>
                                        <div className='card-sub'>
                                            Patients' information is added via doctor and the reports are also uploaded by the doctor. A unique QR code is generated for patient upon successful registration.
                                        </div>
                                    </div>
                                </div>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-image'></div>
                                        <div className='card-title'>
                                            Patients can view thier reports
                                        </div>
                                        <div className='card-sub'>
                                            On the patients' dasboard, they can view their profile and their past reports. The patient can use the QR code when visiting a doctor. On scanning the QR, doctor can view all the past reports of the patient.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
