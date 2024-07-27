import React from "react";

const NewsCard = ({image, title, date, number}) => {
    return (
        <div className="w-[385px] rounded-3xl landing-readmore-button my-5">
            <div className="w-[385px] h-[350px]">
                <img src={`../images/${image}`} alt="news" className="rounded-t-3xl w-full h-full" />
            </div>
            <div className="px-10 py-6 h-[250px] flex flex-col content-between">
                <h4 className="text-secondary text-xl">{title}</h4>
                <div className="flex gap-3 mt-auto">
                    <div className="flex gap-2">
                        <img src="../images/icons/calender.svg" alt="calender" className="" />
                        <div className="text-tomato">{date}</div>
                    </div>
                    <div className="flex gap-2">
                        <img src="../images/icons/message.svg" alt="message" className="" />
                        <div className="text-primary">{number}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;
