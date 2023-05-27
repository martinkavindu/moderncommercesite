import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
     <Meta  title = {"Product names"}/>
       <BreadCrumb title ="Product names"/>
       <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'></div>
            <div className='col-6'></div>
          </div>
        </div>
       </div>
       <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
        <div className='bg-white p-3'>
        <h4>Product description</h4>
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
       <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
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