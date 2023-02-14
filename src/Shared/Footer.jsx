import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../assets/images/footer.png'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <section 
        
        >
            <footer
            style={
                {
                    background: `url(${footer})`,
                    backgroundSize: "cover"
                }
            }
            
            className='flex-row items-center mt-9' >
                <div className="footer  p-10 bg-neutral  text-black mx-auto">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to="/" className="link link-hover">Branding</Link>
                        <Link to="/" className="link link-hover">Design</Link>
                        <Link to="/" className="link link-hover">Marketing</Link>
                        <Link to="/" className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to="/" className="link link-hover">About us</Link>
                        <Link to="/" className="link link-hover">Contact</Link>
                        <Link to="/" className="link link-hover">Jobs</Link>
                        <Link to="/" className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to="/" className="link link-hover">Terms of use</Link>
                        <Link to="/" className="link link-hover">Privacy policy</Link>
                        <Link to="/" className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <div className='text-center mt-10 mb-10' >
                    <p className='mx-auto'>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;