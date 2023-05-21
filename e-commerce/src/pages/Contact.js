import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import{AiOutlineHome} from "react-icons/ai";
import{BiPhoneCall} from "react-icons/bi";
import{AiOutlineMail} from "react-icons/ai";
import{BsInfoCircle} from "react-icons/bs";
const Contact =()=>{
    return(
   <>
      <Meta title= {"Contact Us"}/>
        <BreadCrumb title= "Contact Us"/>
        <div className="contact-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8252171524564!2d39.849382674501236!3d-3.6273654426655524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fdd7bcf9ef8eb%3A0xaf1f56c00efc8b35!2sAL-MADINA%20HARDWARE!5e0!3m2!1sen!2ske!4v1684609808706!5m2!1sen!2ske" 
                    width="600" height="450" className="border-0 w-100"
                    allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
               <div className="col-12 mt-5">
                <div className="contact-iiner-wrapper d-flex justify-content-between">
             <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                    <div>
                        <input type = "text" className="form-control" placeholder="Name"/>
                    </div>
                    <div>
                        <input type = "email" className="form-control" placeholder="email"/>
                    </div>
                    <div>
                        <input type = "tel" className="form-control" placeholder="Mobile number"/>
                    </div>
                    <div>
                <textarea name=""id="" className="w-100 form-control" cols="38" rows="4" placeholder="comments">

                </textarea>
                    </div>
                    <div>
                <button className="button"> Submit</button>
                </div>
                </form>
             </div>
             <div> 
                <h3 className="contact-title mb-4"> Get in touch with us</h3>
                <div>
                    <ul className="ps-0">
                        <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineHome className="fs-5"/>
                        <address className="mb-0">Hno: Al-medina Plaza,
charo wamae road,Kilifi</address></li>
                        <li className="mb-3 d-flex gap-15 align-items-center"><BiPhoneCall className="fs-5"/>
                        <a style={{textDecoration: 'none'}} href="tel:+254741934896">+254741934896</a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineMail className="fs-5"/>
                        <a style={{textDecoration: 'none'}} href="mailto:martinmutuku1998@gmail.com">martinmutuku1998@gmail.com</a> 
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center"><BsInfoCircle className="fs-5"/>
                        <p className="mb-0"> Monday - Sartuday 7:30 AM - 5 PM</p></li>
                    </ul>
                </div>
             </div>
                </div>

                </div>     
                </div>
            </div>
        </div>
   </>
    )
}
export  default Contact;