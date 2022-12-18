import React from 'react';
import {Link} from 'react-router-dom';
function Footer(){
    return(
        <section className='section bg-dark text-white my-auto py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h6>Areas we serve currently</h6>
                        <hr/>
                        <p className='text-white'>
                        Moulali,<br/>E.C.I.L,<br/>Housing Board Colony.
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <h6>Quick Links</h6>
                        <hr/>
                        <div ><Link to='/' className='f'>Home</Link></div>
                        <div ><Link to='/about' className='f'>About</Link></div>
                        <div ><Link to='/contact' className='f'>Contact</Link></div>
                    </div>
                    <div className='col-md-4 '>
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className='text-white mb-1'></p>Street no 10,<br/>Complex:1-3-12,<br/>JawaharNagar,Moulali.</div>
                        <div><p className='text-white mb-1'>91 8XXXXXXXX8</p></div>
                        <div><p className='text-white mb-1'>91 8XXXXXXXX8</p></div>
                        <div><p className='text-white mb-1'>ASdairyfarm@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;