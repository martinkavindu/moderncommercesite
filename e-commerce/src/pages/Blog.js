import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
const Blog = ()=>{
    return(
        <>
           <Meta title= {"Blogs"}/>
        <BreadCrumb title= "Blogs"/>
        <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                <div className="filter-card mb-3">
<h4 className="filter-card"> Shop By Categories</h4>
<div>
    <ul className="ps-0">
        <li>Electricals</li>
        <li>building</li>
        <li>plumbing</li>
        <li>garden tools</li>
    </ul>
</div>
</div>     </div>
                    <div className="col-9">
                        <div className="row">
                        <div className="col-6 mb-3">
                            <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                            <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                            <BlogCard/>
                        </div>
                        <div className="col-6 mb-3">
                            <BlogCard/>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Blog;