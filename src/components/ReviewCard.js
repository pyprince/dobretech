import React from "react";

const ReviewCard = ({name, role, review_text, score}) => (
    <div className="sm:px-2 xl:px-12 py-8">
        <div className="flex flex-wrap flex-col text-left content-between w-[100%] min-h-[410px] rounded-3xl p-8 review-carousel-card">
            <div>
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <img src="../images/sample_avatar.png" alt="dummy avatar" className="rounded-full" />
                    <div>
                        <div className="sm:text-xl font-bold">{name}</div>
                        <div className="">{role}</div>
                    </div>
                </div>
                <div className="py-4">
                    {review_text}
                </div>
            </div>
            <div className="text-2xl mt-auto">
                {
                    Array(score).fill(<span className="text-[#FFB737]">★</span>)
                }
                {
                    score < 5 && Array(5 - score).fill(<span>★</span>)
                }
            </div>
        </div>
    </div>
)

export default ReviewCard;
