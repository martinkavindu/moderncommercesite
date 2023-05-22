import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color"
const  CompareProduct = ()=>
{
    return(
       <>
       <Meta title={"compare products"}/>
       <BreadCrumb title ="Compare products"/>
       <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.png"alt=""className="position-absolute cross img-fluid "/>
                        <div className="product-card-image"> 
                        <img src="images/paint1.jpg"alt=""/>
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title"> Crown Polyurethane Clear Varnish - 4 Litres - Interior - Paint</h5>
                            <h6 className="price mb-3 mt-3"> Ksh 3,500</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Crown</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Paints</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                   <Color/>
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                  <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.png"alt=""className="position-absolute cross img-fluid "/>
                        <div className="product-card-image"> 
                        <img src="images/can.jpg"alt=""/>
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title"> Generic  hard Metal Watering Can 9 Litres</h5>
                            <h6 className="price mb-3 mt-3"> Ksh 1,500</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Generic</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Watering can</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                   <Color/>
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                  <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.png"alt=""className="position-absolute cross img-fluid "/>
                        <div className="product-card-image"> 
                        <img src="images/screw.jpg"alt=""/>
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Universal 31 In 1 Precision Magnetic Mini Screwdriver Set</h5>
                            <h6 className="price mb-3 mt-3"> Ksh 600</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Universal</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Set</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                   <Color/>
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                  <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.png"alt=""className="position-absolute cross img-fluid "/>
                        <div className="product-card-image"> 
                        <img src="images/gloves.jpg"alt=""/>
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title"> Waterproof Thorn Resistant Anti Skid Outdoor Gardening Protective Gloves</h5>
                            <h6 className="price mb-3 mt-3"> Ksh 500</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Generic</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Vehicle</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                   <Color/>
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                  <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       </>

    )
}
export default CompareProduct;