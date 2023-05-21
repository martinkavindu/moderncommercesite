import React from "react";
import { Link } from "react-router-dom";
import{BsFacebook,BsInstagram,BsWhatsapp,BsTwitter} from "react-icons/bs";
function Footer(){
    return(
      <>
      <footer className="py-4 ">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-5">
                    <div className="footer-top-data d-flex gap-30 align-items-center">
                        <img src="images/newsletter.png"alt="newsletter"/>
                        <h4 className="mb-0 text-white"> Sign up for News Letter</h4>
                    </div>
                </div>
                <div className="col-7  "> 
        <div className="input-group "> 
  <input type="text" class="form-control py-1" placeholder="Your email address" 
  aria-label="Your email address" aria-describedby="basic-addon2"/>
  <span class="input-group-text p-3" id="basic-addon2">
    Subscribe
  </span>
</div>
</div>
            </div>
        </div>
      </footer>
      <footer className="py-4">
<div className="container-xxl">
    <div className="row">
        <div className="col-4">
            <h5 className="text-white"> Contact Us</h5>
            <div>
                <address className="text-white fs-6 ">
                    Hno: Al-medina Plaza,<br/>charo wamae road,Kilifi<br/>
                    PostalCode:8010
                </address>
                <a  style={{textDecoration: 'none'}} href="tel:+254741934896"className="mt-3 d-block mb-1 text-white">
                    +254741934896
                </a>
                <a  style={{textDecoration: 'none'}} href="mailto:martinmutuku1998@gmail.com"className="mt-2 d-block mb-0 text-white">
                    martinmutuku1998@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4 ">
                    <a href=""> <BsFacebook className="text-white"/>
                    </a>
                    <a href=""><BsWhatsapp className="text-white"/> </a>
                    <a href=""><BsInstagram className="text-white"/></a>
                    <a href=""><BsTwitter className="text-white"/></a>
                </div>
            </div>
        </div>
        <div className="col-3">
            <h5 className="text-white">Information</h5>
            <div className="footer-Links d-flex flex-column">
                <Link style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Refund Policy</Link>
                <Link style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link  style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Terms of Service</Link>
            </div>
        </div>
        <div className="col-3">
            <h5 className="text-white">Account</h5>
            <div className="footer-Links d-flex flex-column">
                <Link style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Search</Link>
                <Link style={{textDecoration: 'none'}} className="text-white py-2 mb-1">About Us</Link>
                <Link style={{textDecoration: 'none'}} className="text-white py-2 mb-1">FaQ</Link>
                <Link  style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Contact</Link>
            </div>
        </div>
        <div className="col-2">
            <h5 className="text-white">Quick Links</h5>
            <div className="footer-Links d-flex flex-column">
                <Link style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Building materials</Link>
                <Link style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Tools</Link>
                <Link style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Plumbing</Link>
                <Link  style={{textDecoration: 'none'}} className="text-white py-2 mb-1">Electricals</Link>
            </div>
        </div>
    </div>
</div>
      </footer>
      <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
            <div className="col-12 mb-0 text-white">
                <p className="text-center"> Almedina Hardware&copy;{new Date().getFullYear()} All rights reserved Developed by kaviflux tech solutions  </p>
            </div>
        </div>

      </div>
      </footer>
      </>
    )
}
export default Footer;