import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <h1 className="text-3xl sm:text-5xl text-primary text-center font-semibold mt-20 px-2">Future Tech - IT Professional Development</h1>
            <div className="flex flex-col md:flex-row justify-center items-center mt-5 sm:mt-20 px-5 py-3 gap-16">
                <div className="flex justify-center gap-8">
                    <div className="text-center w-[140px]">
                        <img src="../images/icons/community_calender.svg" className="w-24 mx-auto" alt="start date" />
                        <h5 className="text-2xl text-primary font-semibold">Start Date</h5>
                        <p className="text-secondary">April 1st, 2024</p>
                    </div>
                    <div className="text-center w-[140px]">
                        <img src="../images/icons/community_network.svg" className="w-24 mx-auto" alt="start date" />
                        <h5 className="text-2xl text-primary font-semibold">Start Date</h5>
                        <p className="text-secondary">April 1st, 2024</p>
                    </div>
                </div>
                <div className="news-detail-card flex flex-col lg:flex-row justify-between items-center p-6 w-auto md:w-[800px]">
                    <p className="text-secondary text-center lg:text-left max-w-[440px]">Career Coaching and Interview Prep Online Learning Portal  Physical & Cloub Base Lab Access Vendors Study Guide provided Practice Exam Questions</p>
                    <Link to='/apply' className="bg-primary px-10 py-2 my-5 rounded-md">Apply Now</Link>
                </div>
            </div>
            <div className="flex justify-center items-center md:gap-16 lg:gap-40 mt-20 max-w-[1400px] mx-auto px-5">
                <div>
                    <div className="flex items-center gap-3 text-tomato text-xl font-semibold py-3">
                        <span class="bg-primary rounded-full w-3 h-3"></span>
                        <h6>Course Overview</h6>
                    </div>
                    {/* show in specific screen size */}
                    <div className="news-detail-card text-secondary block md:hidden p-5 my-5 max-w-[500px]">
                        <h6 className="font-semibold">Delivery Mode</h6>
                        <div className="flex gap-2 ml-2">
                            <span className="bg-secondary w-[5px] h-[5px] rounded-full mt-3"></span>
                            <p className="p-1">Virtual Classroom - Instructor-led</p>
                        </div>
                        <h6 className="font-semibold">Duration</h6>
                        <div className="flex gap-2 ml-2">
                            <span className="bg-secondary w-[5px] h-[5px] rounded-full mt-3"></span>
                            <p className="p-1">All modules, Online learning / Virtual Lab, to be completed within a defined period / weekly time table to be provided.</p>
                        </div>
                    </div>
                    {/* end */}
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span class="bg-primary rounded-full w-3 h-3"></span>
                        <h6>Curriculum</h6>
                    </div>
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span class="bg-primary rounded-full w-3 h-3"></span>
                        <h6>Goals</h6>
                    </div>
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span class="bg-primary rounded-full w-3 h-3"></span>
                        <h6>Audience & Requirement</h6>
                    </div>
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span class="bg-primary rounded-full w-3 h-3"></span>
                        <h6>Tuition & Payment</h6>
                    </div>
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span class="bg-primary rounded-full w-3 h-3"></span>
                        <h6>Delivery Duration</h6>
                    </div>
                </div>
                {/* show specific screen size */}
                <div className="news-detail-card text-secondary hidden md:block p-5 my-5 w-[700px]">
                    <h6 className="font-semibold">Delivery Mode</h6>
                    <div className="flex gap-2 ml-2">
                        <span className="bg-secondary w-[5px] h-[5px] rounded-full mt-3"></span>
                        <p className="p-1">Virtual Classroom - Instructor-led</p>
                    </div>
                    <h6 className="font-semibold">Duration</h6>
                    <div className="flex gap-2 ml-2">
                        <span className="bg-secondary w-[5px] h-[5px] rounded-full mt-3"></span>
                        <p className="p-1">All modules, Online learning / Virtual Lab, to be completed within a defined period / weekly time table to be provided.</p>
                    </div>
                </div>
                {/* end */}
            </div>
            <div className="my-20">
                <img src="../images/community_mark.png" alt="mark" className="mx-auto" />
            </div>
        </div>
    )
}

export default Community;
