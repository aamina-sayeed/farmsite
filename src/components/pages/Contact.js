import React from 'react';
function Contact(){
    return(
      <div className='bg-light'>
         <section className='py-4'>
          <div className='container '>
            <div className='row'>
              <div className='col-md-12 my-auto'>
                  <h4 className='mainh'>Contact Us</h4>
                  <div className='line2'></div>
              </div>
            </div>
          </div>
        </section>
      <section className='section py-0 mb-5'>
        <div className='container'>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-12'>
                  <h6> Contact Form</h6>
                  <hr/>
                  <div className='form-group'>
                    <label for="" className='mb-2'>Full Name</label>
                    <input type="text" name="" className='form-control' placeholder='Enter full name'/>
                  </div>

                  <div className='form-group'>
                    <label for="" className='mb-2'>Phone Number</label>
                    <input type="text" name="" className='form-control' placeholder='Enter full name'/>
                  </div>

                  <div className='form-group'>
                    <label for="" className='mb-2'>Email Address</label>
                    <input type="email" name="" className='form-control' placeholder='Enter full name'/>
                  </div>

                  <div className='form-group'>
                    <label for="" className='mb-2'>Message</label>
                    
                    <textarea rows="3" className='form-control' placeholder='Enter your message'></textarea>
                  </div>

                  <div className='form-group'>
                    <button className='btn bg-brown shadow mt-3 w-100 text-white' type='button'>Submit</button>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
       </section>
      </div>
    );
}

export default Contact;