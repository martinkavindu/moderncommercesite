import React from "react";
import { Link } from "react-router-dom";
const BlogCard = ()=>{
    return(
        
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog5.jpg"alt="blog" className="img-fluid w-100"/>
                </div>
                <div className="blog-content">
                    <p className="date"> 01 MARCH 2023 </p>
                    <h6 className="title"> Another beautiful day to buy from us</h6>
                    <p className="desc">
                    The kitchen used to be a back room where food was prepared and where dishes were cleaned.<br/>
                     Fast forward to the modern times, a kitchen is the central room which brings everyone together
                    </p>
                    <Link to="/blog/:id" className="button"> Read more</Link>
                </div>
            </div>
       
    )
}
export default BlogCard;