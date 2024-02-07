import React from 'react'
import './Members.css'
import member1 from '../../../../assets/Members/member1.jpg'

export default function Members() {
  return (
    <div className='text-center container mt-5'>
      <h2 className='text-center '>Members</h2>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>BDO Koderma</h4>
        <h5 className='member-position' >ex officio president</h5>
      </div>
     
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Shyamsundar Singhania</h4>
        <h5 className='member-position' >Patron</h5>
      </div>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Madhusudan Prasad Daruka</h4>
        <h5 className='member-position' >Patron</h5>
      </div>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Suresh Kumar Jain</h4>
        <h5 className='member-position' >Patron</h5>
      </div>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Pradeep Kumar Kedia</h4>
        <h5 className='member-position' >Executive Chairman</h5>
      </div>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Mahesh Daruka</h4>
        <h5 className='member-position' >vice president</h5>
      </div>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Ramratan Maharshi</h4>
        <h5 className='member-position' >vice president</h5>
      </div>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Om Prakash Khetan</h4>
        <h5 className='member-position' >Secretary</h5>
      </div>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Jitendra Kumar (Arun Modi)</h4>
        <h5 className='member-position' >Joint Secretary</h5>
      </div>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Sardar Avtar Singh</h4>
        <h5 className='member-position' >Joint Secretary</h5>
      </div>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        
        <h4 className='member-name mt-1'>Sh. Avinash Seth</h4>
        <h5 className='member-position' >treasurer</h5>
      </div>
      
      </div>
    </div>
  )
}