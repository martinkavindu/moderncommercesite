import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

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
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
  </>
  

  )
}

export default SingleBlog