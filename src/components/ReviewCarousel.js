import React from "react";
import ReviewCard from "./ReviewCard";
import { Carousel } from "react-responsive-carousel";
import { landing } from "../static_content";

const ReviewCarousel = () => {
    return (
        <>
            <div className="review-carousel hidden lg:block py-10">
                <Carousel
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={35}
                    autoPlay={true}
                    interval={2000}
                    showStatus={false} showThumbs={false} showArrows={false}
                >
                    <ReviewCard name={landing.review_card.name} role={landing.review_card.role} review_text={landing.review_card.review_text} score={landing.review_card.score} />
                    <ReviewCard name={landing.review_card.name} role={landing.review_card.role} review_text={landing.review_card.review_text} score={landing.review_card.score} />
                    <ReviewCard name={landing.review_card.name} role={landing.review_card.role} review_text={landing.review_card.review_text} score={landing.review_card.score} />
                </Carousel>
            </div>
            <div className="review-carousel py-10 hidden sm:block lg:hidden">
                <Carousel
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={60}
                    autoPlay={true}
                    interval={2000}
                    showStatus={false} showThumbs={false} showArrows={false}
                >
                    <ReviewCard name={landing.review_card.name} role={landing.review_card.role} review_text={landing.review_card.review_text} score={landing.review_card.score} />
                    <ReviewCard name={landing.review_card.name} role={landing.review_card.role} review_text={landing.review_card.review_text} score={landing.review_card.score} />
                    <ReviewCard name={landing.review_card.name} role={landing.review_card.role} review_text={landing.review_card.review_text} score={landing.review_card.score} />
                </Carousel>
            </div>
            <div className="review-carousel py-10 sm:hidden">
                <Carousel
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={100}
                    autoPlay={true}
                    interval={2000}
                    showStatus={false} showThumbs={false} showArrows={false}
                >
                    <ReviewCard name={landing.review_card.name} role={landing.review_card.role} review_text={landing.review_card.review_text} score={landing.review_card.score} />
                    <ReviewCard name={landing.review_card.name} role={landing.review_card.role} review_text={landing.review_card.review_text} score={landing.review_card.score} />
                    <ReviewCard name={landing.review_card.name} role={landing.review_card.role} review_text={landing.review_card.review_text} score={landing.review_card.score} />
                </Carousel>
            </div>
        </>
    );
}

export default ReviewCarousel;
