import React, { useContext } from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect'
import board from '../assets/board.jpeg'
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import ceo from '../assets/oluwatimilehin.jpg'
// Tidal <span className='text-teal-200'>Waves</span> Technology




function LandingPage() {
    return (
        <div>
            <div className='flex flex-row items-center justify-around bg-gradient-to-br from-teal-900 to-teal-200 min-h-screen px-10 max-w-screen'>
                <div className='text-left'>
                    <h1 className='uppercase text-white font-semibold text-5xl'>
                        <ReactTypingEffect
                            text={['Tidal Waves Technology']}
                            speed={100}
                            eraseDelay={1500}
                            typingDelay={500}
                            cursor="|"
                        />
                    </h1>
                    <p className='italic text-white mt-2 font-light'>"Leave the stress of your projects and let the tides take control"</p>
                    <div className='flex flex-row items-center justify-around max-w-fit'>
                        <Link className='text-white mx-2 px-4 py-2 mt-3 bg-teal-900 rounded-3xl hover:bg-teal-400 shadow-inherit duration-500 hover:text-teal-900'>About Us</Link>
                        <Link className='text-white mx-2 px-4 py-2 mt-3 bg-teal-900 rounded-3xl hover:bg-teal-400 shadow-inherit duration-500 hover:text-teal-900'>Contact Us</Link>
                    </div>
                </div>

                <img src={Logo} className='rounded-3xl' />
            </div>
            <div className='bg-gradient-to-bl from-teal-200 to-teal-900 flex flex-row items-center justify-around px-7 py-7 h-screen'>
                <div className='flex flex-col h-full w-5/12'>
                    <h4 className='text-left text-teal-950 font-semibold text-lg'>About Us</h4>
                    <h1 className='text-white text-7xl uppercase font-semibold text-left'>Our Dream Is Global Tech Improvement</h1>
                    <p className='text-white font-medium text-left mt-14'>
                        <span className='text-teal-900 font-semibold'>Tidal Waves Technology</span> is a dynamic and innovative tech agency dedicated to creating exceptional digital experiences. Our team of skilled developers is passionate about crafting high-quality websites that not only meet but exceed our clients' expectations.

                        At Tidal Waves Technology, we understand that a website is more than just an online presence; it is a crucial tool for engaging customers, driving sales, and establishing a brand. That's why our talented developers work meticulously to design and build websites that are visually stunning, user-friendly, and technically robust.

                        Our rich pool of developers brings together a wealth of expertise in various technologies and frameworks. This diversity allows us to tackle a wide range of projects, from simple landing pages to complex e-commerce platforms and custom web applications.

                        At Tidal Waves Technology, we are not just developers; we are problem-solvers, innovators, and visionaries.
                    </p>
                </div>
                <div className='flex flex-col h-full w-5/12'>
                    <img src={board} className='w-fit rounded-lg' />
                    <div className='w-full grid grid-cols-2 h-fit mt-12'>
                        <div className='flex flex-col justify-between bg-white w-5/6 mx-5 rounded-xl py-4 px-8 mt-5'>
                            <h1 className='text-teal-900 font-bold text-3xl text-left'>&lt;2</h1>
                            <p className='text-teal-900 text-left mt-3'>Years Experience</p>
                        </div>

                        <div className='flex flex-col justify-between bg-white w-5/6 mx-5 rounded-xl py-4 px-8 mt-5'>
                            <h1 className='text-teal-900 font-bold text-3xl text-left'>100K+</h1>
                            <p className='text-teal-900 text-left mt-3'>Potential Projects</p>
                        </div>

                        <div className='flex flex-col justify-between bg-white w-5/6 mx-5 rounded-xl py-4 px-8 mt-5'>
                            <h1 className='text-teal-900 font-bold text-3xl text-left'>100%</h1>
                            <p className='text-teal-900 text-left mt-3'>Delivery Success rate</p>
                        </div>

                        <div className='flex flex-col justify-between bg-white w-5/6 mx-5 rounded-xl py-4 px-8 mt-5'>
                            <h1 className='text-teal-900 font-bold text-3xl text-left'>1</h1>
                            <p className='text-teal-900 text-left mt-3'>Project Overseen</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-br from-teal-900 to-teal-200 h-screen px-7 py-10'>
                <h1 className='text-white text-6xl font-semibold mt-7'>Our <span className='text-teal-200'>Services</span></h1>
                <div className='flex flex-row justify-around items-center w-full'>
                    <div className='bg-white h-fit w-1/4 px-3 py-3 rounded-xl mt-3'>
                        <h1 className='text-teal-900 font-semibold text-left text-2xl'>Website Development <WebhookOutlinedIcon className='ml-2 font-bold' /></h1>
                        <p className='text-left mt-5 text-teal-700'>Transform your online presence with Tidal Waves Technology! We don't just build websites; we create digital experiences that captivate and convert. Our team of skilled developers is dedicated to turning your vision into a dynamic, user-friendly website that stands out in today's competitive digital landscape. </p>
                    </div>

                    <div className='bg-white h-fit w-1/4 px-3 py-3 rounded-xl mt-36'>
                        <h1 className='text-teal-900 font-semibold text-left text-2xl'>Mobile Development <PhoneIphoneOutlinedIcon className='ml-2 font-bold' /></h1>
                        <p className='text-left mt-5 text-teal-700'>Unlock the power of mobile with Tidal Waves Technology! In today's fast-paced world, having a mobile presence is no longer optional—it's essential. At Tidal Waves Technology, we specialize in creating innovative, user-friendly mobile applications that drive engagement and deliver results.</p>
                    </div>

                    <div className='bg-white h-fit w-1/4 px-3 py-3 rounded-xl mt-64'>
                        <h1 className='text-teal-900 font-semibold text-left text-2xl'>Maintenance Services <EngineeringOutlinedIcon className='ml-2 font-bold' /></h1>
                        <p className='text-left mt-5 text-teal-700'>Tidal Waves Technology is your partner beyond project delivery. At Tidal Waves Technology, our commitment to your success doesn’t end with the delivery of your project. We believe in forging long-term partnerships by providing exceptional maintenance services to ensure your digital assets continue to perform at their best.</p>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-bl from-teal-200 to-teal-900 h-screen px-7 py-10 flex flex-row items-center justify-center'>
                <img src={ceo} className='mx-8 rounded-2xl w-2/5' />
                <div>
                    <h1 className='text-teal-900 font-semibold text-3xl text-left'>From The CEO's Desk</h1>
                    <p className='text-white text-left'>
                        Dear Valued Clients, Partners, and Visitors,

                        Welcome to Tidal Waves Technology!

                        I am thrilled to have you here and to introduce you to our dynamic, innovative company. At Tidal Waves Technology, we are dedicated to pushing the boundaries of what’s possible in the world of digital solutions. Whether you're a startup seeking to make your mark, an established business looking to innovate, or a visionary with a groundbreaking idea, we are here to turn your dreams into reality.

                        Our team of highly skilled developers, designers, and strategists bring a wealth of experience and creativity to every project. We pride ourselves on our ability to understand your unique needs and deliver tailored solutions that drive success. From stunning websites and cutting-edge mobile applications to ongoing maintenance and support, we offer a comprehensive suite of services designed to help you thrive in the digital age.

                        As the CEO of Tidal Waves Technology, my vision is to create a company that not only meets but exceeds your expectations. We are committed to excellence, innovation, and, most importantly, your success. We believe in building strong, lasting relationships with our clients based on trust, transparency, and exceptional service.

                        I invite you to explore our website, learn more about our services, and discover how we can help you achieve your goals. If you have any questions or would like to discuss your project, please do not hesitate to reach out to us. We are here to help and look forward to the opportunity to work with you.

                        Thank you for considering Tidal Waves Technology. Together, let's ride the wave of innovation and create something extraordinary. <br />

                        Warm regards,<br />

                        <span className='font-semibold uppercase'>Oluwatimilehin Rotimi</span><br />
                        CEO, Tidal Waves Technology
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-teal-900 to-teal-200 h-fit px-7 py-10">
                <h1 className="text-white font-semibold text-6xl">Contact <span className='text-teal-900'>Us</span></h1>
                <div className='grid grid-cols-3 justify-between pt-9'>
                    <input className='m-auto w-3/4 h-12 px-3 focus:outline-none' type='text' placeholder='First Name' />
                    <input className='w-3/4 m-auto h-12 px-3 focus:outline-none' type='text' placeholder='Last Name' />
                    <input className='w-3/4 m-auto h-12 px-3 focus:outline-none' type='email' placeholder='Email' />
                </div>
                {/* <input type='textarea' className='mt-4 w-11/12 h-6' aria-rowspan={20}/> */}
                <textarea className='mt-4 w-11/12 cursor-text px-3 py-3 focus:outline-none' placeholder='Enter a message' rows={5}></textarea>
                <div className='mt-2'>
                    <Link className='text-white mx-2 px-4 py-2 mt-3 bg-teal-900 rounded-3xl hover:bg-teal-400 shadow-inherit duration-500 hover:text-teal-900'>Submit</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
