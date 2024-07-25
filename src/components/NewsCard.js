import React from "react";

const NewsCard = () => {
    return (
        <div className="w-[385px] rounded-3xl landing-readmore-button my-5">
            <div className="w-[385px] h-[350px]">
                <img src="../images/migrate_wordpress.jfif" alt="cloud" className="rounded-t-3xl w-full h-full" />
            </div>
            <div className="px-10 py-6 h-[250px] flex flex-col content-between">
                <h4 className="text-secondary text-xl">Step By Step Guide To Migrate WordPress Website</h4>
                <div className="flex gap-3 mt-auto">
                    <div className="flex gap-2">
                        <img src="../images/icons/calender.svg" alt="calender" className="" />
                        <div className="text-tomato">June 12, 2024</div>
                    </div>
                    <div className="flex gap-2">
                        <img src="../images/icons/message.svg" alt="message" className="" />
                        <div className="text-primary">251</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;
