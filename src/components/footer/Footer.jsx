import React from 'react';
import Container from '../container/Container';

const Footer = () => {
    return (
        <div className='bg-black text-white sm:px-7'>
            <Container>
                <div className='flex flex-col lg:flex-row justify-between gap-4 pb-10 pt-12'>
                    <div className='lg:basis-sm'>
                        <h3 className='font-semibold text-2xl mb-2'>CS — Ticket System</h3>
                        <p>Tickets are a way to assign ownership of a task to an individual or role so you can take quick action. Tickets tasks let you create tickets based on previous events. Once you create a ticket, you can manage your tickets through The template comes with Ticket Flow, Suggestions, Refunds, and Bugs tabs, as well as a dedicated form and an Archive folder. </p>
                    </div>
                    <div>
                        <h3 className='font-semibold text-2xl mb-2'>Company</h3>
                        <ul className='list-none space-y-2'>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Our Mission</a></li>
                            <li><a href="">Contact Saled</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-2xl mb-2'>Services</h3>
                        <ul className='list-none space-y-2'>
                            <li><a href="">Product & Services</a></li>
                            <li><a href="">Customer Stories</a></li>
                            <li><a href="">Download Apps</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-2xl mb-2'>Information</h3>
                        <ul className='list-none space-y-2 space-y-2'>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms And Condition</a></li>
                            <li><a href="">Join Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-2xl mb-2'>Social Links</h3>
                        <ul className='list-none space-y-2'>
                            <li><a href=""><i className="fa-brands fa-x-twitter bg-white rounded-full p-2 mr-3 text-black"></i>@ CS — Ticket System</a></li>
                            <li><a href=""><i className="fa-brands fa-linkedin-in bg-white rounded-full p-2 mr-3 text-black"></i>@ CS — Ticket System</a></li>
                            <li><a href=""><i className="fa-brands fa-facebook-f text-black bg-white rounded-full px-3 py-2 mr-3"></i>@ CS — Ticket System</a></li>
                            <li><a href=""><i className="fa-solid fa-envelope bg-white rounded-full p-2 mr-3 text-black"></i>support@cst.com</a></li>
                        </ul>
                    </div>
                </div>
                <span className='bg-gray-600 w-full block h-0.5 mt-4'></span>
                <div>
                    <p className='text-center p-5'>&copy; 2026 CS — Ticket System. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;