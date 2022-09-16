import React from 'react'

const AdminPage = () => {
    return (
        <div className='admin-page-container'>
            <div className='admin-page-left'>
                <div className='admin-page-left-nav'>
                    <div className='left-nav-items'>
                        <div className='left-nav-logo'>Healthier</div>
                        <div className='left-nav-item'>Home</div>
                        <div className='left-nav-item'>Add Doctor</div>
                        <div className='left-nav-item'>View Doctors</div>
                        <div className='left-nav-item'>Account</div>
                    </div>
                    <div className='left-nav-logout'>
                        Logout
                    </div>
                </div>
            </div>
            <div className='admin-page-right'>
                <div className='admin-page-left-nav'></div>
            </div>
        </div>
    )
}

export default AdminPage
