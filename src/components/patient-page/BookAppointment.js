import React from 'react'
import { Link } from 'react-router-dom'

const BookAppointment = () => {
    return (
        <div className='admin-page-container'>
            <div className='admin-page-left'>
                <div className='admin-page-left-nav'>
                    <div className='left-nav-items'>
                        <Link to='/' className='left-nav-logo'>
                            Healthier
                        </Link>
                        <Link to='/patient' className='left-nav-item'>
                            Home
                        </Link>
                        <Link to='/patient/view-doctor' className='left-nav-item-active'>
                            View Doctors
                        </Link>
                        <Link to='/patient/account' className='left-nav-item'>
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
                            Welcome Mr.
                        </div>
                    </div>
                </div>
                <div className='content-container'>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment
