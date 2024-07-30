// static content to feed ui, could be fetched from backend

export const header = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Services',
        path: '/services'
    },
    {
        title: 'About Us',
        path: '/aboutus'
    },
    {
        title: 'Community',
        path: '/community'
    }
];

export const footer = {
    partners: [
        {
            logo: 'paloalto.png',
            link: 'https://www.paloalto.com/',
            name: 'Palo Alto Software'
        },
        {
            logo: 'juniper.png',
            link: 'https://www.juniper.net/',
            name: 'Juniper Networks'
        },
        {
            logo: 'aws.png',
            link: 'https://www.aws.amazon.com/',
            name: 'AWS'
        },
        {
            logo: 'pearson.png',
            link: 'https://home.pearsonvue.com/',
            name: 'Pearson Vue'
        },
        {
            logo: 'symantec.png',
            link: 'https://vip.symantec.com/',
            name: 'Symantec VIP'
        },
        {
            logo: 'sanajong.png',
            link: 'https://sanajong.nl/',
            name: 'San-A-Jong IT'
        },
    ],
    important_links: [
        {
            title: 'Training',
            path: '/training'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'News',
            path: '/news'
        },
        {
            title: 'About Us',
            path: '/aboutus'
        },
        {
            title: 'Apply Now',
            path: '/apply'
        },
        {
            title: 'Intro to IT',
            path: '/intro'
        },
        {
            title: 'FAQs',
            path: '/faqs'
        },
    ],
    information: {
        address: 'PO Box 63, University of Buea - IT center, Buea, South West Region - Cameroon',
        phone_numbers: [
            ' +237 671163568',
            ' +237 682498299',
            ' +237 696948590'
        ],
        email_address: 'info@dobretech.com'
    },
    footer_introduction: `DobreTech IT Training & Consultancy is a
        premier institution that specializes in providing
        cutting-edge training programs in information
        technology and with our passion for innovation
        and dedication to excellence, we strive to equip
        individuals with the skills and knowledge
        necessary to thrive in the digital era.`
}

export const landing = {
    carousel: {
        welcome: 'Welcome to Dobretech',
        commit: 'Committed in Delivering, Quality and Effective Training',
        linking: 'Linking you to the Future',
        content1: [
            'Partner to Offer Career Hands-on Training in',
            'Cyber Security & Cloud Computing'
        ],
        content2: [
            'Leading Expert IT Training We provides the best',
            'We build trusted relationship',
            'Train and get certify'
        ],
        content3: [
            'Aspire for more',
            'Get Train on top technologies',
            'Get in-demand skills',
            'Get Certify and be Recognized',
            'Learning keeps you in the lead',
        ],
        content4: [
            'GAIN IN-DEMAND SKILLS WITH EXPERT',
            'LED IT COURSES',
        ],
        batch_notification: [
            '2nd Batch, Starting October',
            '21st, 2024'
        ],
    },
    features: [
        {
            title: 'Physical & Virtual Labs',
            content: `Physical Labs for real world
                experience, Virtual Labs for sandbox
                simulated experience accessible from
                anywhere & training delivered in real
                world projects.`,
            icon: 'labs.svg'
        },
        {
            title: 'Career Coaching',
            content: `Need help choosing the right career
                path or interview tips? DobreTech
                experts can help guide and coach
                you based on your ability, finances,
                and skillsets.`,
            icon: 'career_coaching.svg'
        },
        {
            title: 'Cerification Preparation',
            content: `A great way to test your knowledge
                and prepare you for exams with real
                questions and flashcard experience,
                customized for your studies.`,
            icon: 'certification_prepare.svg'
        }
    ],
    upcoming_events: {
        title: 'Join our upcoming Events',
        prefix: 'Discover, Connect, and Grow',
        events: [
            {
                title: 'LOT Forum Africa 2024',
                time: '3h 30m',
                type: 'Virtual Conference'
            },
            {
                title: 'International Exhibition for Enterprises SMEs and Partnerships of Yaounde',
                time: '3h 30m',
                type: 'Virtual Conference'
            }
        ]
    },
    cerification_courses: [
        {
            title: 'Get Student ID card',
            text: `Dobretech provide certification and professional training courses include Cloud, Security, Networking, AI, providing valuable perspectives on the current IT & perspectives on the current IT & Telecommunications landscape and trends`,
            image: 'get_id_card.png',
            link: '/'
        },
        {
            title: 'Corporate & Career Training',
            text: `Dobretech offers state-of-the-art training in the highly specialized fields of IT. Our expert teams provide new knowledge and insight in training programs covering a wide range of specialized areas.`,
            image: 'corporate_career.png',
            link: '/'
        },
        {
            title: 'IT Consulting',
            text: `DobreTech provide IT consulting to help and support the design and implement advanced solutions in IT governance, security, data
                management, system configurations, upgrade and field support.`,
            image: 'it_consulting.png',
            link: '/'
        },
    ],
    review_card: [
        {
            name: 'Michelle Kenyi',
            role: 'Student',
            image: 'review_michelle',
            review_text: `Overall, it is an excellent program I will recommend to any one because it’s made for anyone. Even someone without an IT background and the labs are easy to use also since they come with step-by-step instructions.`,
            score: 5 // assumed as an integer, should figure out if it's float
        },
        {
            name: 'Kogge Lovert',
            role: 'Student',
            image: 'review_kogge',
            review_text: `Generally, I think this is the best educational training program that I have experienced real world practical. It’s just so amazing how the courses are outlined with each course having a connection to the other. And the labs are just super awesome.`,
            score: 5 // assumed as an integer, should figure out if it's float
        },
        {
            name: 'Andy Tante',
            role: 'Student',
            image: 'review_andy',
            review_text: `I dream of becoming a cloud engineer, this program has been very helpful, not only not only to me but to my peers as well, as we have had depper understanding irrespective of our discipline what would be expected of us in the real world. I love the fact that all our instructors have been in the industry for over a decade, so not only are we getting insights about work ethics, we’re also gaining experience with hands on projects. `,
            score: 5 // assumed as an integer, should figure out if it's float
        },
        {
            name: 'Nicolas Mambo',
            role: 'Student',
            image: 'review_nicolas',
            review_text: `The cybersecurity and cloud computing program at DobreTech is designed with a strong focus on industry-relevant skills and the curriculum is structured to cover the latest trends, technologies, and best practices incorporating a balance of theoretical lessons and hands-on practical lesson experience.`,
            score: 5 // assumed as an integer, should figure out if it's float
        },

    ],
    news: [
        {
            image: 'migrate_wordpress.jfif',
            title: 'Step By Step Guide To Migrate WordPress Website',
            date: ' June 12, 2024',
            number: 251,
            link: '/'
        },
        {
            image: 'penetration_test.png',
            title: 'AWS, Google, and Azure Command-Line Tools Could Leak Credentials in Build Logs',
            date: ' April 15, 2024',
            number: 251,
            link: '/'
        },
        {
            image: 'education.png',
            title: 'DobreTech Institution and University of Buea: Empowering Innovation and Education',
            date: ' March 17, 2024',
            number: 251,
            link: '/'
        },
    ]
}

export const apply = {
    program_type: ['Cloud Computing', 'Cybersecurity', 'UB program'],
    star_month: ['October 2024', 'November 2024'],
    payment_type: ['Payment1', 'Payment2'] // it could be static - select your prefer option
}

export const aboutus = {
    info: [
        {
            title: 'Our Story',
            icon: 'aboutus_story',
            text: 'Coming from a third world country we learn to adapt and improvised and always seek for skills which lead us to study extremely hard and through though situations'
        },
        {
            title: 'Our Mission',
            icon: 'aboutus_mission',
            text: 'Our mission is to provide affordable professional cutting-Edge and on-demand training. Ensuring that participants are job ready, while also addressing the global IT skills-shortage.'
        },
        {
            title: 'Our Vision',
            icon: 'aboutus_vision',
            text: 'Our vision is to build a highly competitive and effective training provider that will become the number one choice for both individuals and corporate organizations in Cameroon, Africa and to the Globe.'
        },
    ],
    e_learning: [
        {
            icon: 'professional',
            text: 'We\'re Experienced Professionals'
        },
        {
            icon: 'homework',
            text: 'We\'ve Done Our Homework'
        },
        {
            icon: 'cost',
            text: 'We\'re Flexible, Agile and Cost-effective'
        },
        {
            icon: 'client',
            text: 'Our Clients Get Results'
        },
        {
            icon: 'quality',
            text: 'We are Committed to Quality'
        },
        {
            icon: 'deliver',
            text: 'We do more than just deliver'
        },
    ]
}
