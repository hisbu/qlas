import React, { Component } from 'react'
import SecondNavBar from './../../component/secondNavBar'

class DashboardUser extends Component{
    render(){
        return(
            <div className='dashboardUser'>
                <SecondNavBar/>
                 <h1>Dashboar user</h1>
            </div>
        )
    }
}

export default DashboardUser;
