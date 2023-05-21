import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import {Helmet} from "react-helmet";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
const OurStore = ()=>{
    const [grid,setGrid]=useState(4);

    return(
        <>
        <Meta title= "Our Store"/>
    

        <BreadCrumb title= "Our Store"/>
        <div className="store-wrapper home-wrapper-2  py-5">
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
                </div>
                <div className="filter-card mb-3">
                <h4 className="filter-card"> Filter By </h4>
                <div>
                    <h6 className="sub-title">Availability</h6>
                <div>
                <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        value=""
                        id=""/>
                        <label className="form-check-label"for="">In Stock(1)
                        </label>
        
                    </div>
                    <div className="form-check">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                    
                        />
                        <label className="form-check-label"
                        for="">
                      Out of Stock(0)
                        </label> 
                    </div>
                </div>
                <h6 className="sub-title">Price</h6>
                <div className="d-flex align-items-center gap-10">
                <div className="form-floating mb-3">
  <input type="email" className="form-control " id="floatingInput" placeholder="From"/>
  <label htmlFor="floatingInput">From</label>
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control"
  id="floatingInput1" placeholder="To"/>
  <label htmlFor="floatingInput">To</label>
</div>
        
                </div>
                <h6 className="sub-title">Colors</h6>
               
                    <div>
                    <Color/>
                    </div>
                    <h6 className="sub-title">Size</h6>
               <div>
               <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        value=""
                        id="color-1"/>
                        <label className="form-check-label"htmFor="color-1">S (2)
                        </label>
        
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        value=""
                        id="color-2"/>
                        <label className="form-check-label"htmFor="color-2">M (2)
                        </label>
        
                    </div>
               </div>
                </div>
                
                </div>
                <div className="filter-card mb-3">
                <h4 className="filter-card">Product Tags</h4>
                <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
<span className="badge bg-light text-secondary rounded-3 py-2 px-3">Generators</span>
<span className="badge bg-light text-secondary rounded-3 py-2 px-3">Iron Sheets</span>
<span className="badge bg-light text-secondary rounded-3 py-2 px-3">Taps</span>
<span className="badge bg-light text-secondary rounded-3 py-2 px-3">Cements</span>
                    </div>
                </div>
                </div>
                <div className="filter-card mb-3">
                <h4 className="filter-card">Random Product</h4>
                <div>
                    <div className="random-products mb-3 d-flex">
           <div className="w-50">
            <img src="images/1.jpg" className="img-fluid"
            alt=""/>
           </div>
           <div className="w-50">
            <h6> Generic petroleum power generator</h6>
                  <ReactStars
    count={5}
    size={24} value="4" edit={false}
    activeColor="#ffd700"
  />
  <b> ksh 25,000</b>
           </div>
                    </div>
                    <div className="random-products d-flex">
           <div className="w-50">
            <img src="images/dustcoat.jpg" className="img-fluid"
            alt=""/>
           </div>
           <div className="w-50">
            <h6> Generic dust coat</h6>
                  <ReactStars
    count={5}
    size={24} value="4" edit={false}
    activeColor="#ffd700"
  />
  <b> ksh 1,000</b>
           </div>
                    </div>
                </div>
                </div>
                </div> 
                <div className="col-9">

                    <div className="filter-sort-grid">
                      <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-10">
                            <p className="mb-0 d-block" style={{width:"100px"}}>
                                Sort By:
                            </p>
                            <select name=""className="form-control form-select" id="">
                    
                                <option value="manual">Featured</option>
                                <option value="best-selling" selected="selected">
                                    Best selling
                                </option>
                                <option value="title-ascending">
                                    Alphabetically A-Z
                                </option>
                                <option value="title-descemding">
                                    Alphabetically Z-A
                                </option>
                                <option value="price-ascending">
                                    Price, low to high
                                </option>
                                <option value="price-descending">
                                    Price, high to low
                                </option>
                                <option value="created-ascending">
                                    Date, new to old
                                </option>
                                <option value="created-descending">
                                    Date, old to new
                                </option>
                                
                              </select>
                            
                        </div>
                        <div className="d-flex align-items-center gap-10">
<p className="totalproducts mb-0">53 Products</p>
<div className="d-flex gap-10 align-items-center grid">
    <img onClick={()=> {setGrid(12);
    }} src="images/square.png"className="d-block img-fluid" alt="grid"/>
    <img onClick={()=> {setGrid(6);
    }} src="images/menu1.png"className="d-block img-fluid" alt="grid"/>
    <img onClick={()=> {setGrid(4);
    }} src="images/menu.png"className="d-block img-fluid" alt="grid"/>
    <img onClick={()=> {setGrid(3);
    }} src="images/menu.png"className="d-block img-fluid" alt="grid"/>
</div>
                        </div>
                      </div>
                    </div>
               
               <div className="filter-sort-grid mb-4">
            
               </div>
               <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-grid ">
                    <ProductCard grid={grid}/>
                </div>
           
               </div>
                </div>

                </div>  
            </div>
        </div>
        </>
    )
}
export default OurStore;