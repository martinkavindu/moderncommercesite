import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
const Home=()=>{
    return(
        <>
        <section className="home-wrapper-1 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative ">
 <img src="images/washing.jpg"alt="" className="img-fluid rounded-3"/>
 <div className="main-banner-content position-absolute ">
    <h5></h5>
    <h6></h6>
    <p> </p>
    <Link className="button">SOURCE NOW</Link>
 </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10  justify-content-between align-items-center">
                        <div className="small-banner position-relative ">
 <img src="images/cement.jpeg"alt="" className="img-fluid rounded-3"/>
 <div className="small-banner-content position-absolute ">
    <h5></h5>
    <h6> <Link className="button">SOURCE NOW</Link> </h6>
    <p></p>
 </div>
                        </div>
  <div className="small-banner position-relative ">
 <img src="images/sp1.jpg"alt="" className="img-fluid rounded-3"/>
 <div className="small-banner-content position-absolute ">
    <h5></h5>
    <h6><Link className="button"> SOURCE NOW</Link></h6>
    <p></p>
 </div>
                        </div>
                        <div className="small-banner position-relative ">
 <img src="images/watertap.jpeg"alt="" className="img-fluid rounded-3"/>
 <div className="small-banner-content position-absolute ">
    <h5></h5>
    <h6></h6>
    <Link className="button">SOURCE NOW</Link>
 </div>
                        </div>
                        <div className="small-banner position-relative ">
 <img src="images/bulb.jpeg"alt="" className="img-fluid rounded-3"/>
 <div className="small-banner-content position-absolute ">
    <h6><Link className="button">SOURCE NOW</Link></h6>
    <p></p>
 </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrappper-2 py-5">
<div className="container-xxl">
    <div className="row">
        <div className="col-12"></div>
        <div className="services d-flex align-items-center justify-content-between">
            <div className="gap-10">
                <img src="images/ship.png"alt=""/>
                <h6> Free shipping</h6>
                <p className="mb-0">From all orders over 10,000</p>
            </div>
            <div className="gap-10">
                <img src="images/gf.png"alt=""/>
                <h6> Surprise Offers</h6>
                <p className="mb-0">save upto 25% off</p>
            </div>
            <div className=" gap-10" >
                <img src="images/supp.png"alt=""/>
            <h6> Support 24/7</h6>
            <p className="mb-0">Shop with us </p>
            </div>
            <div className=" gap-10">
                <img src="images/d.png"alt=""/>
                <h6> Affordable Price</h6>
                <p className="mb-0">Get Factory Default Price</p>
            </div>
            <div className=" gap-10">
                <img src="images/save.png"alt=""/>
                <h6>Secure Payments</h6>
                <p className="mb-0">100% protectected payment</p>
            </div>
            
        </div>
    </div>
    </div>            
        </section>
        <section className="home-wrapper-2 py-5 ">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                            <div className="d-flex gap align-items-center">
                                <div>
                        <h6>Building Materials</h6>
                        <p> Available </p>
                            </div>
            
                                <img src="images/sdrain.jpg"alt=""/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                        <h6>Plumbing equipments</h6>
                        <p> Available </p>
                            </div>
            
                                <img src="images/tape.jpg"alt=""/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                        <h6>Electricals</h6>
                        <p> Available </p>
                            </div>
            
                                <img src="images/muscle.jpg"alt=""/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                        <h6>Garden Tools</h6>
                        <p> Available  </p>
                            </div>
            
                                <img src="images/pruningshares.jpg"alt=""/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                        <h6>Vitron HTC</h6>
                        <p> Ksh 14,596 <br/><s>Ksh 20,000</s>  </p>
                            </div>
            
                                <img src="images/tv1.jpg"alt=""/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                        <h6>Vitron HTC3200s</h6>
                        <p> Ksh 14,596 <br/><s>Ksh 20,000</s>  </p>
                            </div>
            
                                <img src="images/tv2.jpg"alt=""/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                        <h6>Vitron 32inch</h6>
                        <p> Ksh 14,596 <br/><s>Ksh 20,000</s>  </p>
                            </div>
            
                                <img src="images/tv3.jpg"alt=""/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                        <h6>Vitron HTC3200s</h6>
                        <p> Ksh 14,596 <br/><s>Ksh 20,000</s>  </p>
                            </div>
            
                                <img src="images/tv4.jpg"alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className="featured-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h4 className="section-heading">Featured Collection</h4 >
                    </div>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>

                </div>
            </div> 

        </section>
        <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="famous-card position-relative">
                        <img src="images/washercouple.jpg" className="img-fluid"
                        alt=""/>
                      <div className="famous-content position-absolute">
                      <h5></h5>
                        <h6></h6>
                        <p>  </p>
                      </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="famous-card position-relative">
                        <img src="images/usb.jpg" className="img-fluid"
                        alt=""/>
                      <div className="famous-content position-absolute">
                      <h5 className="text-dark"></h5>
                        <h6 className="text-dark"></h6>
                        <p className="text-dark">  </p>
                      </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="famous-card position-relative">
                        <img src="images/kinbar.jpg" className="img-fluid"
                        alt=""/>
                      <div className="famous-content position-absolute">
                      <h5 className="text-dark">kinbar padlock</h5>
                        <h6 className="text-dark">alarm high quality</h6>
                        <p className="text-dark">Alarm siren Lock  </p>
                      </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="famous-card position-relative">
                        <img src="images/bathroom.jpg" className="img-fluid"
                        alt=""/>
                      <div className="famous-content position-absolute">
                      <h5 className="text-dark">Union bathroom door</h5>
                        <h6 className="text-danger">Ksh 3,500</h6>
                        <p className="text-dark"></p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="special-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
            <div className="col-12">
                        <h4 className="section-heading">Special Products</h4 >
                    </div>  
            </div>
            <div className="row">
                <SpecialProduct/>
                <SpecialProduct/>
                <SpecialProduct/>
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
        <section className="marque-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                <div className="col-12">
                        <h4 className="section-heading"> Our Top Brands</h4 >
                    </div>
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className=" d-flex">
                                <div className="mx-4 w-5">
                                    <img src="images/arthur1.jpeg"alt="brand"/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src="images/aico.jpg"alt="brand"/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src="images/airflow.png"alt="brand"/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src="images/ingneco.png"alt="brand"/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src="images/royal.jpg"alt="brand"/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src="images/dumuzas.jpg"alt="brand"/>
                                </div>
                                <div className="mx-4 w-5">
                                    <img src="images/crown.jpg"alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/crab1.png"alt="brand"/>
                                </div>
                                
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="blog-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h4 className="section-heading"> Our Latest News</h4 >
                    </div>
        

                </div>
                <div className="row">
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                </div>
            </div>

        </section>
        </>
        
    )
}
export default Home;