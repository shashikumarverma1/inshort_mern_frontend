import React from 'react'


function InfoHeader() {
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

  return (
   <div className='d-flex justify-content-center   '>
     <div className='d-flex justify-content-around  mt-2 w-75 shadow p-3 mb-5  rounded ' style={{
      backgroundColor:"red"
     }}>
       <div className='mt-3 '><b>
For the best experience use inshorts app on your smartphone </b></div>
       <div  className='mx- p-1'>
        <img style={{
            width:150
        }} src={appleStore} alt="apple image"/>
       </div>
       <div  className='mx- p-1'>
        <img style={{
            width:150
        }} src={googleStore} alt='googlr'/>
       </div>
     
    </div>
   </div>
  )
}

export default InfoHeader