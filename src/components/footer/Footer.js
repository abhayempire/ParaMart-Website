import React from 'react'
import "./footer.css";

const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);
  return (
    <footer>
      <div className='footer_container'>
        <div className='footr_details_one'>
            <h3>Get to know us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>ParaMart Cares</p>
        </div>
        <div className='footr_details_one forres' >
            <h3>Connect with us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            
        </div>
        <div className='footr_details_one forres'>
            <h3>Make money with us</h3>
            <p>Sell on ParaMart</p>
            <p>Protect and Build Your Brand</p>
            <p>ParaMart Global Selling</p>
            <p>Fulfilment by ParaMart</p>
            <p>Advertise Your Products</p>
            <p>ParaMart Pay on Merchants</p>
        </div>
        <div className='footr_details_one forres' >
            <h3>Let Us Help You</h3>
            <p>COVID-19 and ParaMart</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            
        </div>
      </div>
      <div className='lastdetails'>
        <img src='./ParaMart.png' alt='' />
        <p>Conditions of Use & Sale &nbsp; &nbsp; &nbsp; Privacy Notice &nbsp; &nbsp; &nbsp; Interest-Based Ads&nbsp; &nbsp; &nbsp; &copy; 1996-{year}, ParaMart.com, Inc. or its affiliates</p>
      </div>
    </footer>
  )
}

export default Footer
