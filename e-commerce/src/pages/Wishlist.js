import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const Wishlist = ()=> {
    return(
       <>
       <Meta  title = {"Wishlist"}/>
       <BreadCrumb title ="Wishlist"/>
       <div className="wishlist-wrapper home-wrapper-2 py-5">
<div className="container-xxl">
    <div className="row">
        <div className="col-3">
            <div className="wishlist-card  position-relative">
            <img src="images/cross.png"alt=""className="position-absolute cross img-fluid "/>
                <div className="wishlist-card-image">
            <img src="images/sealing.jpg"alt="" className="img-fluid w-100"/>
                </div>
                <div className=" py-3 px-3">
                <h5 className="title">Bodex Bituminous Weather Roofing Waterproofing Hole Sealing Compound Coating Bitumen Waterproofer</h5>
                <h6 className="price">Ksh 3,000</h6>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="wishlist-card  position-relative">
            <img src="images/cross.png"alt=""className="position-absolute cross img-fluid "/>
                <div className="wishlist-card-image">
            <img src="images/sealing.jpg"alt="" className="img-fluid w-100"/>
                </div>
                <div className=" py-3 px-3">
                <h5 className="title">Bodex Bituminous Weather Roofing Waterproofing Hole Sealing Compound Coating Bitumen Waterproofer</h5>
                <h6 className="price">Ksh 3,000</h6>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="wishlist-card  position-relative">
            <img src="images/cross.png"alt=""className="position-absolute cross img-fluid "/>
                <div className="wishlist-card-image">
            <img src="images/sealing.jpg"alt="" className="img-fluid w-100"/>
                </div>
                <div className=" py-3 px-3">
                <h5 className="title">Bodex Bituminous Weather Roofing Waterproofing Hole Sealing Compound Coating Bitumen Waterproofer</h5>
                <h6 className="price">Ksh 3,000</h6>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="wishlist-card  position-relative">
            <img src="images/cross.png"alt=""className="position-absolute cross img-fluid "/>
                <div className="wishlist-card-image">
            <img src="images/sealing.jpg"alt="" className="img-fluid w-100"/>
                </div>
                <div className=" py-3 px-3">
                <h5 className="title">Bodex Bituminous Weather Roofing Waterproofing Hole Sealing Compound Coating Bitumen Waterproofer</h5>
                <h6 className="price">Ksh 3,000</h6>
                </div>
            </div>
        </div>
    </div>
</div>
       </div>
       </>
    )
}
export default Wishlist;