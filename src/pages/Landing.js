import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import CerificationCourse from '../components/CerificationCourse';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {CarouselSlide1, CarouselSlide2, CarouselSlide3, CarouselSlide4} from '../components/CarouselSlides';
import {landing} from '../static_content' // dummy sample data to feed
import ReviewCarousel from "../components/ReviewCarousel";
import NewsCard from "../components/NewsCard";

export default function Landing() {
    const navigate = useNavigate();
    return (
        <div className="text-primary min-h-[600px]">
            {/* Carousel */}
            <div className="relative">
                <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showStatus={false} showThumbs={false} showArrows={false}>
                    <CarouselSlide1 />
                    <CarouselSlide2 />
                    <CarouselSlide3 />
                    <CarouselSlide4 />
                </Carousel>
                <img src="../images/icons/chat.svg" className="absolute bottom-[5%] right-[3%] w-[30px] sm:w-auto cursor-pointer" alt="chat icon" />
            </div>
            {/* Course List */}
            <div className="landing-courses">
                <div className="flex flex-col sm:flex-row justify-center text-white">
                    <div className="text-center p-5 sm:w-[33.3%]">
                        <div className="py-5">
                            <img src="../images/icons/cloud.svg" className="mx-auto" alt="cloud" />
                        </div>
                        <div className="text-2xl py-1 cursor-pointer">
                            <span className="cursor-pointer hover:font-semibold" onClick={() => {navigate('/')}}>Cloud Computing</span>
                        </div>
                        <div className="py-1 text-[18px]">University of Buea Intensive Hands-on IT Career Training</div>
                        <div className="py-1">6 Months - 3 Sessions</div>
                    </div>
                    <img src="../images/vertical_line.png" className="w-[2px] h-[70px] self-center sm:w-auto sm:h-auto sm:self-stretch" alt="line" />
                    <div className="text-center p-5 sm:w-[33.3%]">
                        <div className="py-5">
                            <img src="../images/icons/whitehat_hacker.svg" className="mx-auto" alt="cloud" />
                        </div>
                        <div className="text-2xl py-1 cursor-pointer">
                            <span className="cursor-pointer hover:font-semibold" onClick={() => {navigate('/')}}>Cybersecurity</span>
                        </div>
                        <div className="py-1 text-[18px]">University of Buea Intensive Hands-on IT Career Training</div>
                        <div className="py-1">6 Months - 3 Sessions</div>
                    </div>
                    <img src="../images/vertical_line.png" className="w-[2px] h-[70px] self-center sm:w-auto sm:h-auto sm:self-stretch" alt="line" />
                    <div className="text-center p-5 sm:w-[33.3%]">
                        <div className="py-5">
                            <img src="../images/icons/ub_program.svg" className="mx-auto" alt="cloud" />
                        </div>
                        <div className="text-2xl py-1">
                            <span className="cursor-pointer hover:font-semibold" onClick={() => {navigate('/')}}>UB Program</span>
                        </div>
                        <div className="py-1 text-[18px]">University of Buea Intensive Hands-on IT Career Training</div>
                        <div className="py-1">6 Months - 3 Sessions</div>
                    </div>
                </div>
                <div className="pt-4 pb-6 text-center">
                    <Link to='/apply' className='inline-block bg-white text-primary font-semibold rounded-md px-5 py-3'>Apply Now - Admission Process</Link>
                </div>
            </div>
            {/* Features */}
            <div className='text-primary text-center font-semibold text-3xl sm:text-4xl py-5 mt-8'>
                DobreTech Features
            </div>
            <div className='flex flex-wrap justify-around p-5'>
                {
                    landing.features.map((feature, i) => (
                        <div className="landing-dobretech-feature text-center w-[300px] px-3 py-8 m-2 rounded-lg" key={i}>
                            <div className="py-2">
                                <img src={`../images/icons/${feature.icon}`} alt={feature.title} className="mx-auto" />
                            </div>
                            <h4 className="text-xl font-semibold py-2">{feature.title}</h4>
                            <p className="py-2 mb-5">{feature.content}</p>
                            <Link to='/' className="landing-readmore-button font-semibold rounded-md px-6 py-3 hover:bg-primary hover:text-white">Read More</Link>
                        </div>
                    ))
                }
            </div>
            {/* upcoming events */}
            <div className="sm:px-8 lg:px-20 mt-16">
                <div className="relative bg-[#DF1C25] pl-4 pr-0 sm:px-16 pt-12 lg:pb-8 text-white sm:rounded-2xl">
                    <p className="text-xl py-1">{landing.upcoming_events.prefix}</p>
                    <h2 className="text-3xl sm:text-5xl font-semibold py-2 sm:w-[500px] relative z-10">{landing.upcoming_events.title}</h2>
                    <div className="relative z-10">
                        {
                            landing.upcoming_events.events.map((event, i) => (
                                <div className="py-2" key={i}>
                                    <div className="flex items-center gap-2 py-2">
                                        <img src="../images/icons/star.svg" alt="title of event" />
                                        <p className="">{event.title}</p>
                                    </div>
                                    <div className="text-xs font-thin flex items-center gap-5">
                                        <div className="flex items-center gap-2">
                                            <img src="../images/icons/clock.svg" alt="time" className="w-3" />
                                            <div>{event.time}</div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="../images/icons/position.svg" alt="type" className="w-3" />
                                            <div>{event.type}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="mt-10 relative z-10">
                        <Link to='/' className="bg-white sm:text-xl text-primary rounded-md px-4 sm:px-6 py-3 hover:bg-primary hover:text-white">View full Events</Link>
                    </div>
                    <img src="../images/upcoming_events_vector.png" alt="vector" className="absolute left-0 bottom-0" />
                    <img src="../images/upcoming_events_character.png" alt="Event woman" className="static block ml-auto mt-[-80px] lg:absolute bottom-0 right-[-50px] z-0" />
                </div>
            </div>
            {/* cerification courses */}
            <div className="text-center text-3xl sm:text-4xl font-semibold sm:mt-16 py-8">
                Cerification Courses
                <img src="../images/icons/curved_line.svg" alt="saucy curved line" className="w-[30%] ml-[60%] sm:w-auto" />
            </div>
            {landing.cerification_courses.map((course, i) => {
                if(i === 1) 
                    return <CerificationCourse 
                      title={course.title} 
                      text={course.text} 
                      image={course.image} 
                      link={course.link} 
                      reversed={true} 
                      key={i}
                    />
                return <CerificationCourse 
                            title={course.title} 
                            text={course.text} 
                            image={course.image} 
                            link={course.link} 
                            key={i}
                         />
            })}
            {/* activities */}
            <div className="px-6 md:px-20 py-8">
                <div className="flex flex-wrap rounded-[30px] landing-activities">
                    <div className="w-full lg:w-[40%]">
                        <img src="../images/work_activities.png" alt="working man" className="rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tr-none lg:rounded-bl-[30px] w-full h-full" />
                    </div>
                    <div className="w-full lg:w-[60%] pl-12 py-12">
                        <h2 className="text-2xl sm:text-4xl font-semibold pr-12">
                            Learn About Our Work & Cultural <span className="text-tomato">Activities</span>
                        </h2>
                        <p className="mt-10 pr-8">
                            Our vision is to build a highly competitive and effective training provider that will become the number one choice for both individuals and corporate organizations in Cameroon, Africa and to the Globe. We will explain everything you are interested. Join our new session. If you have any feel free to contact us.
                        </p>
                        <div className="flex py-6 gap-5">
                            <div className="w-[40%] lg:w-[50%] xl:w-[40%]">
                                <div className="flex items-center gap-2">
                                    <img src="../images/icons/confirmed.svg" alt="confirmed" />
                                    <p className="text-secondary">Reliable and the best</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="../images/icons/confirmed.svg" alt="confirmed" />
                                    <p className="text-secondary">Onsite/classroom/offline delivery modes</p>
                                </div>
                            </div>
                            <div className="w-[40%]">
                                <div className="flex items-center gap-2">
                                    <img src="../images/icons/confirmed.svg" alt="confirmed" />
                                    <p className="text-secondary">Expert tutor</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="../images/icons/confirmed.svg" alt="confirmed" />
                                    <p className="text-secondary">Affordable</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-end pr-10">
                            <Link to='/' className="px-5 py-2 bg-primary text-white rounded-md ml-auto text-base">Explore More</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* latest news */}
            <div className="text-4xl text-center font-semibold mt-12">Latest News</div>
            <div className="py-2 max-w-[800px] mx-auto text-center text-secondary">
                With the help of teachers and the environment as the third teacher, studentshave
                opportunities to confidently take risks.
            </div>
            <div className="flex flex-wrap mt-16 px-12 gap-16 justify-center">
                {landing.news.map((item, i) => (
                    <NewsCard image={item.image} title={item.title} date={item.date} number={item.number} key={i} />
                ))}
            </div>
            {/* video */}
            <div className="flex justify-center px-10 py-12 mt-20">
                <img src="../images/video.png" alt="video" />
            </div>
            {/* review */}
            <div className="text-center text-4xl font-semibold py-1">
                What Our <span className="text-tomato">Students</span> Says About
            </div>
            <ReviewCarousel />
        </div>
    )
}

