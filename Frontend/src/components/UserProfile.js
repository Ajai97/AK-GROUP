
import React, { useEffect, useState } from 'react'



const UserProfile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
 
}, [])


    return(
      
        <div className='container'>
          
          
              <h4>My Profile Details</h4>
           <hr></hr>
            <div className="card-body">
              <div className='row'>
                <div className='col-sm'>
                  <label><b>userId</b></label>
                  <p>{user.userId}</p>
                </div>
                <div className='col-sm'>
                  <label><b>Name</b></label>
                  <p>{user.userName}</p>
                </div>
                </div>
                <div className='row'>
                <div className='col-sm'>
                  <label><b>Email</b></label>
                  <p>{user.email}</p>
                </div>
                <div className='col-sm'>
                  <label><b>Contact Number</b></label>
                  <p>{user.mobileno}</p>
                </div>
                <div className='row'>
                  <label><b>Complete Address</b></label>
                  <p>{user.area+","+user.street+","+user.city+"."}</p>
                  <p>State :  {user.state}</p>
                  <p>PostCode :  {user.postcode}</p>
                </div>
                </div>
              
            </div>
          </div>
       
    
    )
}

export default UserProfile;