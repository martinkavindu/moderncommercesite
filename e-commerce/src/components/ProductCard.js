import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link ,useLocation } from "react-router-dom";
const ProductCard = (props)=>{
    const {grid} = props
    let location = useLocation();

    return(
       <>
       <div 
       className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>

<div className="product-card position-relative"> 
<div className="wishlist-icon position-relative">
       <Link>
       <img src="images/f.png"alt="wish"/>
       </Link>

<div className="product-image">
   <img src="images/blender.jpg" alt="pump"/>
</div>
<div className="product-details">
   <h6 className="brand"> Blenders</h6 >
   <h5 className="product-title">Electric fruit blenders </h5>
   <ReactStars
count={5}
size={24} value="4" edit={false}
activeColor="#ffd700"
/>
<p className="description">Generic PORTABLE USB RECHARGEABLE JUICER CUP Purple
Brand: Generic | Similar products from Generic</p>
   <p className="price">ksh 1,000</p>
</div>
<div className="action-bar position-absolute">
  
   </div>
    <div className="d-flex flex-column">
       <Link>
       <img src=""alt=""/>
       </Link>
       <Link>
       <img src=""alt=""/>
       </Link>
       <Link>
       <img src=""alt=""/>
       </Link>
    </div>
</div>
</div>
</div>
<div 
       className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>

<div className="product-card position-relative"> 
<div className="wishlist-icon position-relative">
       <Link>
       <img src="images/f.png"alt="wish"/>
       </Link>

<div className="product-image">
   <img src="images/blender.jpg" alt="pump"/>
</div>
<div className="product-details">
   <h6 className="brand"> Blenders</h6 >
   <h5 className="product-title">Electric fruit blenders </h5>
   <ReactStars
count={5}
size={24} value="4" edit={false}
activeColor="#ffd700"
/>
<p className="description">Generic PORTABLE USB RECHARGEABLE JUICER CUP Purple
Brand: Generic | Similar products from Generic</p>
   <p className="price">ksh 1,000</p>
</div>
<div className="action-bar position-absolute">
  
   </div>
    <div className="d-flex flex-column">
       <Link>
       <img src=""alt=""/>
       </Link>
       <Link>
       <img src=""alt=""/>
       </Link>
       <Link>
       <img src=""alt=""/>
       </Link>
    </div>
</div>
</div>
</div>


</>

    )

}
export default ProductCard;