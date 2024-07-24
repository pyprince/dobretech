import React from "react";
import { Link } from "react-router-dom";

const CerificationCourse = ({title, image, link, text, reversed=false}) => (
    <div className={`flex flex-wrap  justify-center items-center px-6 sm:px-16 py-8 ${reversed && "md:flex-row-reverse"}`}>
        <div className={`p-3 w-full md:w-[40%]`}>
            <div className="py-5">
                <Link to={link} className="landing-readmore-button font-semibold px-5 py-3 rounded-md hover:bg-primary hover:text-white">Read More</Link>
            </div>
            <h2 className={`text-3xl font-semibold mt-6 ${reversed && "text-tomato"}`}>{title}</h2>
            <p className="mt-4 text-justify">
                {text}
            </p>
        </div>
        <div className={`w-full md:w-[60%]`}>
            <img src={`../images/${image}`} alt="Get ID card" className="" />
        </div>
    </div>
);

export default CerificationCourse;
