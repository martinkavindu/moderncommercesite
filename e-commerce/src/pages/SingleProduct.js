import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from "../components/Color";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {TbGitCompare} from  "react-icons/tb";
import {AiOutlineHeart} from "react-icons/ai";
import { icons } from 'react-icons';
const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
     <Meta  title = {"Product names"}/>
       <BreadCrumb title ="Product names"/>
       <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                <img src='https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/196649/1.jpg?9259'/>
                </div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
<div> <img src='https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/196649/1.jpg?9259' className='img-fluid'/></div>
<div><img src='https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/196649/1.jpg?9259' className='img-fluid'/></div>
<div><img src='https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/196649/1.jpg?9259' className='img-fluid'  /></div>
<div><img src='https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/196649/1.jpg?9259' className='img-fluid'/></div>

              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
             <div className='border-bottom'>
             <h3 className='title'>  Heavy Duty Powerful Blender-2L-Single Cup Black/Red</h3>
             </div>
             <div className='border-bottom py-3' >
          
              <p className='price'>Ksh 4999</p>
              <div className='d-flex align-items-center gap-10'>
              <ReactStars
count={5}
size={24} value="4" edit={false}
activeColor="#ffd700"
/>
<p className='mb-0'> 6 Reviews </p>
              </div>
              <a href ="#review">Write a Review</a>
             </div>
             <div className='border-bottom py-3'>
              <div className='d-flex gap-10 align-items-center my-2'>
<h3 className='product-heading'>Type :</h3>
<p className='product-data'> Blender </p>
              </div>
              <div className='d-flex gap-10 align-items-center my-2'>
<h3 className='product-heading'>Brand : </h3>
<p className='product-data'>Generic</p>
              </div>
              <div className='d-flex gap-10 align-items-center my-2'>
<h3 className='product-heading'>Category :</h3>
<p className='product-data'>Electricals</p>
              </div>
              <div className='d-flex gap-10 align-items-center my-2'>
                <h3 className='product-heading'>Tags :</h3>
                <p className='product-data'> Electricals</p>
              </div>
              <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                <h3 className='product-heading'>Availability :</h3>
                <p className='product-data'> In Stock</p>
              </div>
              <div className='d-flex gap-10 flex-column my-2'>
                <h3 className='product-heading'>Size :</h3>
          <div className='d-flex flex-wrap gap-15'>
            <span className='badge border-1 bg-white text-dark border-secondary'>S</span>
            <span className='badge border-1 bg-white text-dark border-secondary'>M</span>
            <span className='badge bg-white border-1 text-dark border-secondary'>XL</span>
            <span className='badge bg-white border-1 text-dark border-secondary'>XXL</span>
          </div>
              </div>
              <div className='d-flex gap-10 flex-column my-2'>
                <h3 className='product-heading'>Color:</h3>
               <Color/>
              </div>
              <div className='d-flex  align-items-center gap-15 flex-row mt-2 mb-3'>
                <h3 className='product-heading'>Quantity :</h3>
               <div className=''>
                <input type='number'
                name=''
                min="1"
                max="10"
                style={{width:"85px"}}
                id=''
                className='form-control'
                />
              
               </div>
               <div className='d-flex align-items-center gap-30 ms-5'>
               <button className="button border-0">
    Add to Cart
</button>
<Link className="button signup" type="submit">Buy it Now</Link>
                 </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <div>
                  <a href=''> <TbGitCompare className='fs-5 me-2'/>Add to Compare</a>
                </div>
                <div>
                  <a href=''> <AiOutlineHeart className='fs-5 me-2'/>Add to Wishlist</a>
                </div>
                 </div>
                 <div className='d-flex gap-10  flex-column  my-3'>
                  <h3 className='product-heading'>Shipping and Returns :</h3>
<p className='product-data'>
  Free shipping and returns available on all orders above Ksh 9,999.00
  <br/>
  We ship all domestic orders within <b>5-10 working days</b>
</p>
                 </div>
                 <div className='d-flex gap-10 align-items-center my-3'>
<h3 className='product-heading'> Product Link:</h3>
<a href='javascript:void(0);'
   onClick={()=>{
    copyToClipboard (" https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/196649/1.jpg?9259");
   }}> Copy product Link</a>
              </div>
             </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <h4>Product description</h4>
        <div className='bg-white p-3'>
        
          <p className=''>
          Heavy Duty Powerful Blender-2L-Single Cup Black/Red   Need a powerful blender without compromising precious kitchen worktop space?     
Heavy duty blender is a must-have for every home. 
It is a safe and healthy way of blending and grinding.     
This blender will make cooking meals an absolute fun!   You can easily prepare alcoholic cocktails , delicious mashed potatoes , healthy smoothies, Fruit smoothies , Green smoothies , Grinding nuts , Grains , Crushes Ice , Nut butters , Omelettes and many more.      This powerful blender is a true indicator of excellent value for money. 
          </p>
        </div>
            </div>
          </div>
        </div>
       </div>
       <section   className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 id='review'>Reviews</h3>
<div className='review-inner-wrapper'>
<div className='review-head d-flex justify-content-between align-items-end'>
 <div>
  <h4 className='mb-0'>Customer Reviews</h4>
  <div className='d-flex align-items-center gap-10'>
  <ReactStars
count={5}
size={24} value="4" edit={false}
activeColor="#ffd700"
/> 
<p>Based on 6 reviews</p>
  </div>
 </div> 
 {
  orderedProduct && (
    <div>
  <a className='text-dark' href=''> Write a Review</a>
 </div>

  )
 }
</div>
<div className='review-form py-4 '>
  <h4> Write a Review</h4>
<form action="" className="d-flex flex-column gap-15">
                   <div>
                   <ReactStars
count={5}
size={24} value="4" edit={true}
activeColor="#ffd700"
/> 
                   </div>
                    <div>
                <textarea name=""id="" className="w-100 form-control" cols="38" rows="4" placeholder="comments">

                </textarea>
                    </div>
                    <div className='d-flex justify-content-end'>

                <button className="button"> Submit Review</button>
                </div>
                </form>
</div>
<div className='reviews mt-4'>
  <div className='review'>
  <div className='d-flex gap-10 align-items-center'>
    <h6 className='mb-0'>Blender</h6>
    <ReactStars
count={5}
size={24} value="4" edit={false}
activeColor="#ffd700"
/>
  </div>
<p className='mt-3'>It is working perfectly well hope it will not dissapoint</p> 

  </div>
</div>
</div>
            </div>
          </div>
        </div>
       </section>
       <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h4 className="section-heading">Our Popular Products</h4 >
                    </div>
        </div>
        <div className="row">
        <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
        </div>
            </div> 

        </section>
    </>
  )
}

export default SingleProduct