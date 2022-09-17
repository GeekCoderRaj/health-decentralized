import React from 'react'
import { Link } from 'react-router-dom'

const AdminPage = () => {
    return (
        <div className='admin-page-container'>
            <div className='admin-page-left'>
                <div className='admin-page-left-nav'>
                    <div className='left-nav-items'>
                        <Link to='/' className='left-nav-logo'>
                            Healthier
                        </Link>
                        <Link to='/admin' className='left-nav-item-active'>
                            Home
                        </Link>
                        <Link to='/admin/add-doctor' className='left-nav-item'>
                            Add Doctor
                        </Link>
                        <Link to='/admin/view-doc' className='left-nav-item'>
                            View Doctors
                        </Link>
                        <Link to='/admin/account' className='left-nav-item'>
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
                            Welcome @admin
                        </div>
                    </div>
                </div>
                <div className='content-container'>
                    <div className='content-view'>
                        <div className='content-nav-container'>
                            <div className='content-nav'>
                                <div className='content-nav-item'>
                                    Hi there 👋
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
