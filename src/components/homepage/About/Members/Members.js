import React from 'react'
import './Members.css'
import member1 from '../../../../assets/Members/member1.jpg'

export default function Members() {
  return (
    <div className='text-center container'>
      <h2 className='text-center '>Members</h2>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
      <div className=' member-card  mx-3 mx-sm-1  col-md-3  d-flex flex-column align-items-center'>
        <img 
        className='member-pic'
        src={member1} alt='member1'></img>
        <h4 className='member-name mt-1'>Sh Jayram Singh</h4>
        <h5 className='member-position' >President</h5>
      </div>
      <div className=' member-card mx-3 mx-sm-1 col-md-3  d-flex flex-column align-items-center'>
        <img 
        className='member-pic'
        src={member1} alt='member1'></img>
        <h4 className='mt-1 member-name'>Sh Jayram Singh</h4>
        <h5 className='member-position'>President</h5>
      </div>
      <div className='member-card mx-3  col-md-3  d-flex flex-column align-items-center'>
        <img 
        className='member-pic'
        src={member1} alt='member1'></img>
        <h4 className='mt-1 member-name'>Sh Jayram Singh</h4>
        <h5 className='member-position'>President</h5>
      </div>
      <div className=' member-card mx-3 col-md-3 d-flex flex-column align-items-center'>
        <img 
        className='member-pic'
        src={member1} alt='member1'></img>
        <h4 className='mt-1 member-name'>Sh Jayram Singh</h4>
        <h5 className='member-position'>President</h5>
      </div>
      <div className=' member-card mx-3 col-md-3 d-flex flex-column align-items-center'>
        <img 
        className='member-pic'
        src={member1} alt='member1'></img>
        <h4 className='mt-1 member-name'>Sh Jayram Singh</h4>
        <h5 className='member-position'>President</h5>
      </div>
      <div className='member-card mx-3 col-md-3 d-flex flex-column align-items-center'>
        <img 
        className='member-pic'
        src={member1} alt='member1'></img>
        <h4 className='mt-1 member-name'>Sh Jayram Singh</h4>
        <h5 className='member-position'>President</h5>
      </div>
      
      
      </div>
    </div>
  )
}