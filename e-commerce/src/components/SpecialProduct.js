import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = ()=> {
    return(
    <div className="col-4">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/eledrill.jpg" className="img-fluid"alt="special"/>
                </div>
                <div className="special-product-content">
               <h5 className="brand">ingneco</h5>
               <h6 className="tittle"> Electric Drill Modified Tool</h6>
               <ReactStars
    count={5}
    size={24} value="4" edit={false}
    activeColor="#ffd700"
  />
      <p className="price"> <span className="red-p">Ksh 12,000.00 </span> <strike>Ksh 13,000.00</strike></p>
      <div className="discount-till d-flex align-items-center gap-10">
        <p className="mb-0 "><b>5 </b>days</p>
        <div className="d-flex gap-10 align-items-center">
<span className="badge rounded-circle p-2 bg-danger">1</span>:
<span className="badge rounded-circle p-2 bg-danger">1</span>:
<span className="badge rounded-circle p-2 bg-danger">1</span>

        </div>
        
     
      </div>
      <div className="prod-count my-3">
            <p>Products:5</p>
            <div class="progress">
  <div className ="progress-bar" role="progressbar"
   style={{width:"15%"}} aria-valuenow="15"
    aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
        <Link className="button">Add to Cart</Link>
                </div>
            </div>

        </div>
    </div>
    );
}
export default SpecialProduct;