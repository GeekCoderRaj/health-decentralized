import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PatientInfo = () => {
    const nav = useNavigate()
    return (
        <div className='admin-page-container'>
            <div className='admin-page-left'>
                <div className='admin-page-left-nav'>
                    <div className='left-nav-items'>
                        <Link to='/' className='left-nav-logo'>
                            Healthier
                        </Link>
                        <Link to='/doctor' className='left-nav-item'>
                            Home
                        </Link>
                        <Link to='/doctor/add-patient' className='left-nav-item'>
                            Add Patients
                        </Link>
                        <Link to='/doctor/view-patient' className='left-nav-item-active'>
                            View Patients
                        </Link>
                        <Link to='/doctor/appointments' className='left-nav-item'>
                            Appointments
                        </Link>
                        <Link to='/doctor/account' className='left-nav-item'>
                            Account
                        </Link>
                    </div>
                    <Link to='/' className='left-nav-logout'>
                        Logout
                    </Link>
                </div>
            </div>
            <div className='admin-page-right'>
                <div className='admin-page-right-nav'>
                    <div className='right-nav-items'>
                        <div className='right-nav-item'>
                            Welcome Dr.
                        </div>
                    </div>
                </div>
                <div className='content-container'>
                    <div className='content-view'>
                        <div className='content-nav-container'>
                            <div className='content-nav'>
                                <div className='content-nav-item'>
                                    <span
                                        onClick={() => {
                                            nav('/doctor/view-patient')
                                        }}
                                    >
                                        Patients
                                    </span> &#10093; Patient Details
                                </div>
                            </div>
                        </div>
                        <div className='patient-info-container'>
                            <div className='patient-info'>
                                <div className='patient-info-top'>
                                    <div className='info-top-card'>
                                        <div className='patient-info-card'>
                                            Name: John Doe
                                        </div>
                                        <div className='patient-info-card'>
                                            Gender: Male
                                        </div>
                                        <div className='patient-info-card'>
                                            Age: 20
                                        </div>
                                    </div>
                                    <div className='info-top-card'>
                                        <div className='patient-info-card'>
                                            Mobile: 1234567890
                                        </div>
                                        <div className='patient-info-card'>
                                            Email: example@example.com
                                        </div>
                                        <div className='patient-info-card'>
                                            Address: 1234 Street, CA
                                        </div>
                                    </div>
                                </div>
                                <div className='patient-info-bottom'>
                                    <div className='content'>
                                        <div className='form-container'>
                                            <div className='form'>
                                                <div className='form-fields'>
                                                    <div className='form-field'>
                                                        <input type='text' placeholder='Weight' />
                                                    </div>
                                                    <div className='form-field'>
                                                        <input type='text' placeholder='Blood Group' />
                                                    </div>
                                                </div>
                                                <div className='form-fields'>
                                                    <div className='form-field'>
                                                        <input type='text' placeholder='Known Allergies' />
                                                    </div>
                                                    <div className='form-field'>
                                                        <input type='text' placeholder='Chronic disease(if any)' />
                                                    </div>
                                                </div>
                                                <div className='form-fields-add'>
                                                    <div className='form-field'>
                                                        <span>Upload Report</span>
                                                        &nbsp;
                                                        &nbsp;
                                                        <input type='file' />
                                                    </div>
                                                </div>
                                                <div className='form-fields-btn'>
                                                    <div className='form-field-btn'>
                                                        Save
                                                    </div>
                                                    <div className='form-field-btn'>
                                                        Cancel
                                                    </div>
                                                </div>
                                            </div>
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

export default PatientInfo
