import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import s1 from '../images/s1.jpg'
import s2 from '../images/s2.jpg'
import s3 from '../images/s3.jpg'
function Home(){
    return(
      <div>
      <Slider/>
      <section className='Section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center mt-5 mb-5'>
              <h3 className='mainh'>Our Company</h3>
              <div className='line mx-auto'></div>
              <p className='fs'>Established since 2001,we have good experience in this field with good reviews from our customers.<br/>To know more about us head on to our about section.</p>
            <Link to='/about' className='btn bg-brown shadow readm'>Read More</Link>
          </div>
        </div>
        </div>
      </section>
 
      
      <section className='Section  bg-g-light border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-5 mt-5 text-center'>
              <h3 className='mainh'>Our Services</h3>
              <div className='line mx-auto'></div>
            </div>
            <div className='col-md-4 mb-5'>
              <div className='card shadow'>
              <img src={s1} className="w-100 border-bottom ser" alt='services'/> 
                <div className='card body'>
                  <h6 className='mt-3 text-center'>Milk</h6>
                  <div className='line mx-auto'></div>
                    <p className='fs'>We collect fresh milk from our farm.High breed cattle, get milk fresh from the source enjoy a healthy lifestyle</p>
                <Link to='/contact' className="btn bg-brown shadow readm mx-auto">Order Now</Link>
                </div>
              </div>
              </div>
              
              <div className='col-md-4 mb-5'>
              <div className='card shadow'>
              <img src={s2} className="w-100 border-bottom ser" alt='services'/> 
                <div className='card body'>
                  <h6 className='mt-3 text-center'>Curd</h6>
                  <div className='line mx-auto'></div>
                    <p className='fs'>Curd is one of the most common food item in our Indian households.Get all natural and fresh curd supply.</p>
                <Link to="/contact" className="btn bg-brown shadow readm mx-auto">Order Now</Link>
                </div>
              </div>
              </div>
            
            <div className='col-md-4 mb-5'>
              <div className='card shadow'>
              <img src={s3} className="w-100 border-bottom ser" alt='services'/> 
                <div className='card body'>
                  <h6 className='mt-3 text-center'>Desi Ghee</h6>
                  <div className='line mx-auto'></div>
                    <p className='fs'>Pure Ghee enriched with essential vitamins.With great taste and smell you will be left wanting for more.</p>
                <Link to='/contact' className="btn bg-brown shadow readm mx-auto">Order Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    
      <section className='Section border-top mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-5 mt-5 text-center'>
              <h3 className='mainh'>Why Order From Us</h3>
              <div className='line1 mx-auto'></div>
            </div>
            <div className='col-md-4'>
              <h6>No Minimun Order</h6>
              <div className='line1'></div>
              <p className='fs'>You can order any amount of any product no minimun order requirement.</p>
            </div>
            <div className='col-md-4'>
              <h6>Prompt Delivery</h6>
              <div className='line1'></div>
              <p className='fs'>Daily delivery available</p>
            </div>
            <div className='col-md-4'>
              <h6>Fresh Products</h6>
              <div className='line1'></div>
              <p className='fs'>Fresh products ranging from curd,milk,ghee etc</p>
            </div>
        </div>
        </div>
      </section>

      </div>
    );
}

export default Home;