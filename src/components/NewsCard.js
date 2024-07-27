import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({image, title, date, number, link}) => {
    return (
        <div className="w-[360px] rounded-3xl landing-readmore-button my-5">
            <div className="w-[360px] h-[350px]">
                <img src={`../images/${image}`} alt="news" className="rounded-t-3xl w-full h-full" />
            </div>
            <div className="h-[250px] flex flex-col content-between">
                <h4 className="text-secondary text-xl px-10 py-6">{title}</h4>
                <div className="mt-auto flex justify-between items-center px-5 py-5">
                    <div className="flex gap-2">
                        <div className="flex gap-1">
                            <img src="../images/icons/calender.svg" alt="calender" className="" />
                            <div className="text-tomato">{date}</div>
                        </div>
                        <div className="flex gap-1">
                            <img src="../images/icons/message.svg" alt="message" className="" />
                            <div className="text-primary">{number}</div>
                        </div>
                    </div>
                    <Link to={link} className="bg-primary text-white px-4 py-1 rounded-md">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;
