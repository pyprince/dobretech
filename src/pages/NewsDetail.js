import React from "react";
import { Link, useParams } from "react-router-dom";
import { landing } from "../static_content";

const NewsDetail = () => {
    // This is category id. could be used with backend.
    const {id} = useParams();
    console.log(id);
    return (
        <div className="px-3 sm:px-10 max-w-[1400px] mx-auto mb-24">
            <BloggerInfoCard name={blogger.name} avatar={blogger.avatar} description={blogger.description} links={blogger.links} />
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 mt-5 lg:mt-16">
                <div className="mt-5 lg:mt-20">
                    <NewsCategories categories={blog_categories} />
                    <div className="news-detail-card p-3 mt-10">
                        {landing.news.map((news, i) => (
                            <OtherNews title={news.title} image={news.image} date={news.date} id={i+1} key={i} />
                        ))}
                    </div>
                </div>
                <div className="max-w-[980px]">
                    <NewsContent title={news.title} image={news.image} text={news.text} tags={news.tags} />
                </div>
            </div>
        </div>
    )
}

const BloggerInfoCard = ({name, avatar, description, links}) => {
    return (
        <div className="news-detail-card flex flex-wrap justify-between items-center px-10 py-5 ml-auto mt-10 max-w-[800px]">
            <div className="flex flex-wrap justify-center items-center gap-5 py-3">
                <img src={`../images/${avatar}.png`} alt="blogger" className="w-[80px] rounded-full" />
                <h6 className="text-primary text-4xl font-semibold">{name}</h6>
                <p className="text-secondary">{description}</p>
            </div>
            <div className="flex gap-3 py-3 mx-auto lg:mx-0">
                <Link to={links.facebook} target="_BLANK" className="">
                    <img src="../images/icons/facebook_primary.svg" alt="facebook" className="" />
                </Link>
                <Link to={links.twitter} target="_BLANK" className="">
                    <img src="../images/icons/twitter_primary.svg" alt="twitter" className="" />
                </Link>
                <Link to={links.linkedin} target="_BLANK" className="">
                    <img src="../images/icons/linkedin_primary.svg" alt="linkedin" className="" />
                </Link>
                <Link to={links.pinterest} target="_BLANK" className="">
                    <img src="../images/icons/pinterest_primary.svg" alt="pinterest" className="" />
                </Link>
            </div>
        </div>
    )
}

const NewsCategories = ({categories}) => {
    return (
        <div className="news-detail-card p-5 min-w-[350px]">
            {categories.map((category, i) => (
                <div className="flex justify-between items-center py-1" key={i}>
                    <h6 className="text-secondary text-xl font-semibold">{category.category}</h6>
                    <div className="bg-primary text-center text-white w-10 py-1 rounded-lg">{category.items}</div>
                </div>
            ))}
        </div>)
}

const OtherNews = ({id, title, image, date}) => {
    return (
        <div className="flex gap-6 p-3">
            <img src={`../images/${image}`} alt={title} className="w-20 h-20 rounded-2xl" />
            <div className="flex flex-col">
                <h6 className="text-secondary font-semibold">
                    <Link to={`/news/${id}`} className="hover:text-tomato">
                        {title}
                    </Link>
                </h6>
                <div className="flex gap-3 mt-auto">
                    <img src="../images/icons/calender.svg" alt="calender" className="w-4" />
                    <span className="text-tomato text-sm">{date}</span>
                </div>
            </div>
        </div>
    )
}

const NewsContent = ({title, image, tags, text}) => {
    return (
        <div className="news-detail-card">
            <h2 className="text-primary text-4xl font-semibold text-center py-20">{title}</h2>
            <img src={`../images/${image}`} alt={title} className="w-full rounded-t-[20px] aspect-video" />
            <div className="mt-5">
                {tags.map((tag, i) => (
                    <span className="bg-[#0B707780] text-white px-4 py-1 mx-3 rounded-md">{tag}</span>
                ))}
            </div>
            <p className="text-secondary text-justify p-5 sm:p-10">{text}</p>
        </div>
    )
}

const blogger = {
    name: 'Titus',
    description: 'Titus is a frequent speaker on the blogs.',
    avatar: 'blogger_titus',
    links: {
        facebook: 'https://www.facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://www.linkedin.com',
        pinterest: 'https://www.pinterest.com',
    }
}

const news = {
    title: 'Computing Technology For The Consulting',
    image: 'computing_consulting.jpg',
    tags: ['Design', 'Design', 'Design'],
    text: `At an industry level, technology has done two things. First, it has introduced a complete new field of work, commonly bundled under the label ‘digital transformation’. This segment is the fastest growing segment of the consulting sector and according to estimates from Source Global Research it is now worth around one fifth of the entire industry in mature markets. Clients are embracing technologies such as artificial intelligence, robotics, automation and internet of things to gain competitive advantages, and in doing so, tapping the expertise of consultants who stand at the forefront of such developments. Second, the growing role of technology has blurred the lines between traditional consulting work and technology work. A decade ago, there was a clear cut between consulting work (project-based, value-adding advisory based), technology consulting work (project-based tasks such as systems implementation) and non-consulting technology consulting work (more routine tasks such as application development and maintenance). With digital now at the heart of innovation and performance improvement, consulting firms are delivering much more technology work, and are extending their services into a realm previously classified as non-consulting. Consultancies now work with clients to design and develop apps, prototypes and intelligent systems, among other areas.`
}

const blog_categories = [
    {
        category: 'Cloud Computing',
        items: 4
    },
    {
        category: 'Consulting',
        items: 1
    },
    {
        category: 'Cyber Security',
        items: 3
    },
    {
        category: 'Development',
        items: 2
    },
    {
        category: 'Enterpreneurship',
        items: 2
    },
]

export default NewsDetail;
