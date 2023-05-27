import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

import {BiArrowBack} from 'react-icons/bi';
const SingleBlog = () => {
  return (
  <>
   <Meta  title = {"Dynamic blog"}/>
       <BreadCrumb title ="dynamic blog"/>
       <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12"> 
                    <div className='single-blog-card'>
                        <Link to="/blogs" className='d-flex align-items-center gap-15'> <BiArrowBack className='fs-4'/> Go back to blogs</Link>
                        <h3 className='title'>
                           An other beatiful day to buy from  us 
                        </h3>
                        <img className='img-fluid w-100' src="images/blog4.jpg"alt=""/>
                        <p>The kitchen used to be a back room where food was prepared and where dishes were cleaned.
Fast forward to the modern times, a kitchen is the central room which brings everyone together   </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  </>
  

  )
}

export default SingleBlog