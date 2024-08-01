import React, { useState } from "react";
import { Link } from "react-router-dom";

const Community = () => {
    const [page, setPage] = useState(0);
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
                <div className="news-other-card flex flex-col lg:flex-row justify-between items-center p-6 w-auto md:w-[800px]">
                    <p className="text-secondary text-center lg:text-left max-w-[440px]">Career Coaching and Interview Prep Online Learning Portal  Physical & Cloub Base Lab Access Vendors Study Guide provided Practice Exam Questions</p>
                    <Link to='/apply' className="bg-primary px-10 py-2 my-5 rounded-md">Apply Now</Link>
                </div>
            </div>
            <div className="flex justify-center items-center md:gap-16 lg:gap-40 mt-20 max-w-[1400px] mx-auto px-5">
                <div>
                    <div className="flex items-center gap-3 font-semibold py-3">
                        <span className="bg-primary rounded-full w-3 h-3"></span>
                        <h6 className={`cursor-pointer ${page === 0 ? 'text-tomato text-xl':'text-secondary'}`} onClick={() => setPage(0)}>Course Overview</h6>
                    </div>
                    {/* show in specific screen size */}
                    
                    {page === 0 && <div className="news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]">
                        <h6 className="font-semibold">Professional Learning</h6>
                        <p className="p-1">
                            Technology offers the opportunity for teachers to 
                            become more collaborative and extend learning beyond the classroom. 
                            This enhanced collaboration, enabled by technology, 
                            offers access to instructional materials as well as the resources 
                            and tools to create, manage, and assess their quality and usefulness.
                            To enact this vision, academic institutions need 
                            to support teachers in accessing needed technology 
                            and in learning how to use it effectively.
                        </p>
                        <h6 className="font-semibold">Technology changes quickly</h6>
                        <p className="p-1">All modules, Online learning / Virtual Lab, to be completed within a defined period / weekly time table to be provided.</p>
                    </div>}
                    {/* end */}
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span className="bg-primary rounded-full w-3 h-3"></span>
                        <h6 className={`cursor-pointer ${page === 1 ? 'text-tomato text-xl':'text-secondary'}`} onClick={() => setPage(1)}>Curriculum</h6>
                    </div>
                    {page === 1 && <div className="news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]">
                        <p className="p-1">
                            Basic Computer Technology Concepts <br />
                            The Operating System: Windows, MacOS and Linux System <br />
                            Computer Security and Privacy <br />
                            IT Communication Tools <br />
                            The Internet <br />
                            Social Media <br />
                            Microsoft Office Suite (ICDL) <br />
                            Enhance with AI <br />
                            Agile Methodologies (SCRUM) <br />
                        </p>
                    </div>}
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span className="bg-primary rounded-full w-3 h-3"></span>
                        <h6 className={`cursor-pointer ${page === 2 ? 'text-tomato text-xl':'text-secondary'}`} onClick={() => setPage(2)}>Goals</h6>
                    </div>
                    {page === 2 && <div className="news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]">
                        <p className="p-1">
                            Improve Digital Literacy <br />
                            Use Interactive Learning Tools <br />
                            Develop Your Tech Skills <br />
                            Enhance Collaboration <br />
                            Boost Student Engagement & Social Presence <br />
                            Optimize Data Collection and Analyze <br />
                            Improved creative thinking and effective leadership <br />
                        </p>
                    </div>}
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span className="bg-primary rounded-full w-3 h-3"></span>
                        <h6 className={`cursor-pointer ${page === 3 ? 'text-tomato text-xl':'text-secondary'}`} onClick={() => setPage(3)}>Audience & Requirement</h6>
                    </div>
                    {page === 3 && <div className="news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]">
                        <h6 className="font-semibold">Audience</h6>
                        <p className="p-1">
                            Course has been designed for anyone who wants to start or already learning about cloud computing
                        </p>
                        <h6 className="font-semibold">Requirements</h6>
                        <p className="p-1">
                            <ul>
                                <li> - Qualifications and Requirements</li>
                                <li> - At least GCE Advanced level</li>
                                <li> - A Bachelor’s degree</li>
                                <li> - A working private email address</li>
                                <li> - A computer (Desktop or Laptop) in good condition</li>
                                <li> - A good internet bandwidth for online classes</li>
                            </ul>
                        </p>
                    </div>}
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span className="bg-primary rounded-full w-3 h-3"></span>
                        <h6 className={`cursor-pointer ${page === 4 ? 'text-tomato text-xl':'text-secondary'}`} onClick={() => setPage(4)}>Tuition & Payment</h6>
                    </div>
                    {page === 4 && <div className="news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]">
                        <p className="p-1">
                            For More Information <br />
                            Contact: <span className="text-tomato">info@dobretech.com</span>
                        </p>
                    </div>}
                    <div className="flex items-center gap-3 text-secondary font-semibold py-3">
                        <span className="bg-primary rounded-full w-3 h-3"></span>
                        <h6 className={`cursor-pointer ${page === 5 ? 'text-tomato text-xl':'text-secondary'}`} onClick={() => setPage(5)}>Delivery Duration</h6>
                    </div>
                    {page === 5 && <div className="news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]">
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
                    </div>}
                </div>
                {/* show specific screen size */}
                {page === 0 && <div className="news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]">
                    <h6 className="font-semibold">Professional Learning</h6>
                    <p className="p-1">
                        Technology offers the opportunity for teachers to 
                        become more collaborative and extend learning beyond the classroom. 
                        This enhanced collaboration, enabled by technology, 
                        offers access to instructional materials as well as the resources 
                        and tools to create, manage, and assess their quality and usefulness.
                        To enact this vision, academic institutions need 
                        to support teachers in accessing needed technology 
                        and in learning how to use it effectively.
                    </p>
                    <h6 className="font-semibold">Technology changes quickly</h6>
                    <p className="p-1">All modules, Online learning / Virtual Lab, to be completed within a defined period / weekly time table to be provided.</p>
                </div>}
                {page === 1 && <div className="news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]">
                    <p className="p-1">
                        Basic Computer Technology Concepts <br />
                        The Operating System: Windows, MacOS and Linux System <br />
                        Computer Security and Privacy <br />
                        IT Communication Tools <br />
                        The Internet <br />
                        Social Media <br />
                        Microsoft Office Suite (ICDL) <br />
                        Enhance with AI <br />
                        Agile Methodologies (SCRUM) <br />
                    </p>
                </div>}
                {page === 2 && <div className="news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]">
                    <p className="p-1">
                        Improve Digital Literacy <br />
                        Use Interactive Learning Tools <br />
                        Develop Your Tech Skills <br />
                        Enhance Collaboration <br />
                        Boost Student Engagement & Social Presence <br />
                        Optimize Data Collection and Analyze <br />
                        Improved creative thinking and effective leadership <br />
                    </p>
                </div>}
                {page === 3 && <div className="news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]">
                    <h6 className="font-semibold">Audience</h6>
                    <p className="p-1">
                        Course has been designed for anyone who wants to start or already learning about cloud computing
                    </p>
                    <h6 className="font-semibold">Requirements</h6>
                    <p className="p-1">
                        <ul>
                            <li> - Qualifications and Requirements</li>
                            <li> - At least GCE Advanced level</li>
                            <li> - A Bachelor’s degree</li>
                            <li> - A working private email address</li>
                            <li> - A computer (Desktop or Laptop) in good condition</li>
                            <li> - A good internet bandwidth for online classes</li>
                        </ul>
                    </p>
                </div>}
                {page === 4 && <div className="news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]">
                    <p className="p-1">
                        For More Information <br />
                        Contact: <span className="text-tomato">info@dobretech.com</span>
                    </p>
                </div>}
                {page === 5 && <div className="news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]">
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
                </div>}
                {/* end */}
            </div>
            <div className="my-20">
                <img src="../images/community_mark.png" alt="mark" className="mx-auto" />
            </div>
        </div>
    )
}

export default Community;
