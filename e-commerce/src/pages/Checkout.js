import React from 'react';
import { Link } from 'react-router-dom';
import{BiArrowBack} from "react-icons/bi";

const Checkout = () => {
  return (
 <>

    <div className='checkout-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                 <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'> Al-medina</h3>
                        <nav style={{"--bs-breadcrumb-divider": ">"}}>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link className='text-dark' to="/cart" style={{textDecoration:"none"}}>Cart </Link></li>
    &nbsp; 
    <li className="breadcrumb-item active" aria-current="page">Information</li>
    <li className="breadcrumb-item active">Shipping</li>
    &nbsp; 
    <li className="breadcrumb-item active" aria-current="page">Payment</li>
  </ol>
</nav> 
<h4 className='title total'>Contact Information</h4>
<p className='user-details total'> Martin mutuku (martinmutuku@gmail.com)</p>
<h4 className='mb-3'> Shipping Address</h4>
<form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
<div className=''>
    <select  name='' className='form-control form-select' id=''>
<option value="" selected disabled>
    Select County
</option>
    </select>
</div>
<div className='flex-grow-1'>
    <input  type='text' placeholder="First Name" className='form-control'/>
</div>
<div className='flex-grow-1'>
    <input type='text' placeholder="Last Name"className='form-control'/>
</div>
<div className='w-100'>
    <input type='text'placeholder="Address"className='form-control'/>
</div>
<div className='w-100'>
    <input type='text' placeholder="Bulding,street etc"className='form-control'/>
</div>
<div className='flex-grow-1'>
<input type='text' placeholder="City" className='form-control'/>
</div>
<div className='flex-grow-1'>
<select  name='' className='form-control form-select' id=''>
<option value="" selected disabled>Select Sub-County</option>
</select>
</div>
<div className='flex-grow-1'> 
    <input type='text' placeholder="ZipCode"className='form-control'/>
</div>
<div className='w-100'>
    <div className='d-flex justify-content-between align-items-center'>
        <Link className='text-dark' to="/cart " style={{textDecoration:"none"}}> 
        <BiArrowBack className='me-2'/>
        Return to Cart</Link>
        <Link className='button'> Continue to Shipping</Link>
    </div>
</div>
</form>
                    </div>
                 </div>
                 <div className='col-5'>
                    <div className='border-bottom py-4'>
                       <div className='d-flex gap-10 mb-2 align-align-items-center'>
                        <div className='w-75 d-flex gap-10'>
                       <div className="w-25 position-relative"> 
                       <span style={{top:"-10px",right:"2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                            <img src='images/blender.jpg'alt='' className='img-fluid'/>
                        </div>
                        <div>
                            <h4  className='total-price'>Generic blender</h4>
                            <p className='total-price'>Electric fruit mixer</p>
                        </div>
                        </div>
                        <div className='flex-grow-1'>
                            <h5 className='total'>Ksh 1000</h5>
                        </div>
                       </div>
                    </div>
                    <div className='border-bottom py-4'>
                    <div className='d-flex justify-content-between align-nav-item'>
       <p className='total'>SubTotal</p>
       <p className='total-price'>Ksh 1000</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
       <p className='mb-0 total'>Shipping</p>
       <p className='mb-0 total-price'>Ksh 100</p>
                    </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom'>
       <h4 className='total'>Total</h4>
       <h5 className='total'>Ksh 1100</h5>
                    </div>
                 </div>
            </div>
        </div>
    </div>
 </>
  )
}

export default Checkout