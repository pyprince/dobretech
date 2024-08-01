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
        // {
        //     title: 'Training',
        //     path: '/training'
        // },
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
        // {
        //     title: 'Intro to IT',
        //     path: '/intro'
        // },
        // {
        //     title: 'FAQs',
        //     path: '/faqs'
        // },
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
            title: 'Certification Preparation',
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
    certification_courses: [
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
            image: 'review_michelle.jpg',
            review_text: `Overall, it is an excellent program I will recommend to any one because it’s made for anyone. Even someone without an IT background and the labs are easy to use also since they come with step-by-step instructions.`,
            score: 5 // assumed as an integer, should figure out if it's float
        },
        {
            name: 'Kogge Lovert',
            role: 'Student',
            image: 'review_kogge.jpg',
            review_text: `Generally, I think this is the best educational training program that I have experienced real world practical. It’s just so amazing how the courses are outlined with each course having a connection to the other. And the labs are just super awesome.`,
            score: 5 // assumed as an integer, should figure out if it's float
        },
        {
            name: 'Andy Tante',
            role: 'Student',
            image: 'review_andy.jpg',
            review_text: `I dream of becoming a cloud engineer, this program has been very helpful, not only not only to me but to my peers as well, as we have had depper understanding irrespective of our discipline what would be expected of us in the real world. I love the fact that all our instructors have been in the industry for over a decade, so not only are we getting insights about work ethics, we’re also gaining experience with hands on projects. `,
            score: 5 // assumed as an integer, should figure out if it's float
        },
        {
            name: 'Nicolas Mambo',
            role: 'Student',
            image: 'review_nicolas.jpg',
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
        },
        {
            image: 'penetration_test.png',
            title: 'AWS, Google, and Azure Command-Line Tools Could Leak Credentials in Build Logs',
            date: ' April 15, 2024',
            number: 251,
        },
        {
            image: 'education.png',
            title: 'DobreTech Institution and University of Buea: Empowering Innovation and Education',
            date: ' March 17, 2024',
            number: 251,
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

export const news_content = [
    {
        title: 'AWS, Google, and Azure Command-Line Tools Could Leak Credentials in Build Logs',
        image: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2024/01/picture4.webp?fit=728%2C380&ssl=1',
        tags: ['Development', 'E-learning'],
        text: `<div>
                <div class="elementor-widget-container">
                    <div class="tp-post-content">Source: https://orca.security/resources/blog/leakycli-aws-google-cloud-command-line-tools-can-expose-sensitive-credentials-build-logs/

            <div>In November last year, Microsoft fixed a severe security issue in Azure CLI that risked exposing credentials in logs. The vulnerability was identified as <a href="https://nvd.nist.gov/vuln/detail/CVE-2023-36052" target="_blank" rel="noreferrer noopener">CVE-2023-36052</a>&nbsp;and given a CVSS score of 8.6. However, the&nbsp;<a href="https://orca.security/about/orca-research-pod/">Orca Research Pod</a>&nbsp;recently discovered that the AWS and Google Cloud CLIs are exposed to the exact same vulnerability. Dubbed ‘LeakyCLI’, this is a vulnerability that can expose credentials in AWS and Google Cloud logs, which could have far reaching consequences.</div>

            <h2 id="h-executive-summary" class="wp-block-heading">Executive Summary:</h2>

            <ul>
            <li>Orca has discovered that some commands on AWS CLI and Gcloud CLI can expose sensitive information, in the form of environment variables, which can be collected by adversaries when published by tools such as GitHub Actions.</li>
            <li>Microsoft faced the same issue in Azure CLI, and identified this vulnerability as&nbsp;<a href="https://nvd.nist.gov/vuln/detail/CVE-2023-36052">CVE-2023-36052</a>&nbsp;(CVSS score of 8.6) and issued an update and recommendation.</li>
            <li>If bad actors get their hands on these environment variables, this could potentially lead to view sensitive information including credentials, such as passwords, user names, and keys, which could allow them to access any resources that the repository owners can.</li>
            <li>CLI commands are by default assumed to be running in a secure environment, but coupled with CI/CD pipelines, they may pose a security threat.</li>
            <li>This bypasses secret labeling, which aims to block sensitive exposure, because the credentials that are printed back to stdout were never defined by the user during the automation setup.</li>
            <li>Upon discovery of the vulnerability, Orca informed both Google and AWS, who responded that they consider this to be expected behavior based on current design.</li>
            <li>To prevent exposure to this AWS and Google Cloud CLI vulnerability, organizations are advised to avoid storing secrets in environment variables, and instead retrieve them from a dedicated secrets store service such as AWS Secrets Manager.</li>
            </ul>

            <h2 id="h-what-are-azure-gcloud-and-aws-cli" class="wp-block-heading">What are Azure, Gcloud and AWS CLI?</h2>

            All three major cloud service providers provide command-line interfaces for interacting with their cloud platforms: Azure CLI, AWS CLI, and&nbsp;<a href="https://cloud.google.com/sdk/gcloud#:~:text=The%20Google%20Cloud%20CLI%20is,through%20scripts%20and%20other%20automation.">Gcloud CLI</a>&nbsp;The CLIs are unified tools to manage cloud services, which transparently send Rest API requests via documented commands.

            These CLIs are most commonly used in a local private environment, like a developer’s personal computer, but they can also be used for Continuous Integration and Continuous Deployment (CI/CD) environments. A simple example of a CI/CD use case would be deploying source-code to a Lambda function every time there’s a push event to master.

            <div class="wp-block-kevinbatdorf-code-block-pro cbp-hl-loaded cbp-ff-loaded" data-code-block-pro-font-family="Code-Pro-JetBrains-Mono">
            <code><span class="line">name: AWS CI</span>
            <span class="line">on:</span>
            <span class="line">  push:</span>
            <span class="line">    branches:</span>
            <span class="line">      - master</span>

            <span class="line">jobs:</span>
            <span class="line">  deploy:</span>
            <span class="line">    runs-on: ubuntu-latest</span>

            <span class="line">    steps:</span>
            <span class="line">      - name: Checkout repository</span>
            <span class="line">        uses: actions/checkout@v2</span>
            <span class="line">      - name: Set up AWS CLI</span>
            <span class="line">        uses: aws-actions/configure-aws-credentials@v1</span>
            <span class="line">        with:</span>
            <span class="line">          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}</span>
            <span class="line">          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}</span>
            <span class="line">          aws-region: \${{ secrets.AWS_REGION }}</span>
            <span class="line">      - name: deploy</span>
            <span class="line">        run: |</span>
            <span class="line">          npx ncc build src/index.js</span>
            <span class="line">          zip -j deploy.zip ./dist/*</span>
            <span class="line">          aws lambda update-function-code --function-name MyFunction --zip-file fileb://deploy.zip</span>
            </code>
            </div>

            <div class="wp-block-spacer" aria-hidden="true"></div>

            <h2 id="h-Exposure-of-Serverless-environment-variables" class="wp-block-heading">Exposure of Serverless environment variables</h2>

            The main problem we observed was in serverless such as Azure Functions (however this issue was fixed by Microsoft as mentioned above), Google Cloud Functions and AWS Lambda.The documented APIs for these services include actions that return the configuration for these resources, including their environment variables.

            What I found interesting is that it is not only the&nbsp;<em>get&nbsp;</em>or&nbsp;<em>describe</em>&nbsp;commands that return the configuration (including environment variables), but also&nbsp;<em>update</em>&nbsp;and&nbsp;<em>delete</em>. Which carried significant misconfigurations out in the wild.

            <h2 id="h-AWS-CLI-Leakage" class="wp-block-heading">AWS CLI Leakage</h2>

            <div class="wp-block-kevinbatdorf-code-block-pro cbp-hl-loaded cbp-ff-loaded" data-code-block-pro-font-family="Code-Pro-JetBrains-Mono">
            <code><span class="line">aws lambda get-function-configuration</span>
            <span class="line">aws lambda get-function</span>
            <span class="line">aws lambda update-function-configuration</span>
            <span class="line">aws lambda update-function-code</span>
            <span class="line">aws lambda publish-version</span></code>
            </div>

            <div class="wp-block-spacer" aria-hidden="true"></div>

            In a similar way, the above commands send existing environment variables back to the stdout, even if they weren’t part of the associated command.
            <figure class="wp-block-image size-full wp-lightbox-container" data-wp-context="{&quot;uploadedSrc&quot;:&quot;https:\/\/orca.security\/wp-content\/uploads\/2024\/04\/image_b0af83.png&quot;,&quot;figureClassNames&quot;:&quot;wp-block-image size-full&quot;,&quot;figureStyles&quot;:null,&quot;imgClassNames&quot;:&quot;wp-image-63693&quot;,&quot;imgStyles&quot;:null,&quot;targetWidth&quot;:543,&quot;targetHeight&quot;:104,&quot;scaleAttr&quot;:false,&quot;ariaLabel&quot;:&quot;Enlarge image: A screenshot of a Lambda API deployment&quot;,&quot;alt&quot;:&quot;A screenshot of a Lambda API deployment&quot;}" data-wp-interactive="core/image"><img class="wp-image-63693" src="https://orca.security/wp-content/uploads/2024/04/image_b0af83.png" sizes="(max-width: 543px) 100vw, 543px" srcset="https://orca.security/wp-content/uploads/2024/04/image_b0af83.png 543w, https://orca.security/wp-content/uploads/2024/04/image_b0af83.png?resize=384,74 384w" alt="A screenshot of a Lambda API deployment" width="543" height="104" data-wp-init="callbacks.setButtonStyles" data-wp-on--click="actions.showLightbox" data-wp-on--load="callbacks.setButtonStyles" data-wp-on-window--resize="callbacks.setButtonStyles"><button class="lightbox-trigger" type="button" aria-haspopup="dialog" aria-label="Enlarge image: A screenshot of a Lambda API deployment" data-wp-init="callbacks.initTriggerButton" data-wp-on--click="actions.showLightbox" data-wp-style--right="context.imageButtonRight" data-wp-style--top="context.imageButtonTop"></button></figure>
            <figure class="wp-block-image"><img class="wp-image-63694" src="https://orca.security/wp-content/uploads/2024/04/image_6815ad.png" sizes="(max-width: 816px) 100vw, 816px" srcset="https://orca.security/wp-content/uploads/2024/04/image_6815ad.png 816w, https://orca.security/wp-content/uploads/2024/04/image_6815ad.png?resize=384,116 384w, https://orca.security/wp-content/uploads/2024/04/image_6815ad.png?resize=780,235 780w, https://orca.security/wp-content/uploads/2024/04/image_6815ad.png?resize=768,232 768w, https://orca.security/wp-content/uploads/2024/04/image_6815ad.png?resize=750,226 750w, https://orca.security/wp-content/uploads/2024/04/image_6815ad.png?resize=808,244 808w" alt="A screenshot of the API deployment response from Lambda" width="816" height="246">

            <figcaption class="wp-element-caption"><em>For&nbsp;</em><strong><em>security</em></strong><em>&nbsp;reasons – sensitive data is hidden</em></figcaption>
            </figure>

            <h2 id="h-Gcloud-CLI-Leakage" class="wp-block-heading">Gcloud CLI Leakage</h2>

            <div class="wp-block-kevinbatdorf-code-block-pro cbp-hl-loaded cbp-ff-loaded" data-code-block-pro-font-family="Code-Pro-JetBrains-Mono">
            <code><span class="line">gcloud functions deploy &lt;func&gt; --set-env-vars</span>
            <span class="line">gcloud functions deploy &lt;func&gt; --update-env-vars</span>
            <span class="line">gcloud functions deploy &lt;func&gt; --remove-env-vars</span></code>
            </div>

            <div class="wp-block-spacer" aria-hidden="true"></div>

            The above commands send the defined / predefined environment variables back to stdout. Or in the advanced scenario, back to the build logs. If the developer isn’t aware of it, even using secret masking via GitHub Actions / Cloudbuild will not do, because there may be pre-existing environment variables in the cloud function.
            <figure class="wp-block-image size-full wp-lightbox-container" data-wp-context="{&quot;uploadedSrc&quot;:&quot;https:\/\/orca.security\/wp-content\/uploads\/2024\/04\/image_4d066e.png&quot;,&quot;figureClassNames&quot;:&quot;wp-block-image size-full&quot;,&quot;figureStyles&quot;:null,&quot;imgClassNames&quot;:&quot;wp-image-63695&quot;,&quot;imgStyles&quot;:null,&quot;targetWidth&quot;:575,&quot;targetHeight&quot;:328,&quot;scaleAttr&quot;:false,&quot;ariaLabel&quot;:&quot;Enlarge image: A screenshot from a Cloud Build environment&quot;,&quot;alt&quot;:&quot;A screenshot from a Cloud Build environment&quot;}" data-wp-interactive="core/image"><img class="wp-image-63695" src="https://orca.security/wp-content/uploads/2024/04/image_4d066e.png" sizes="(max-width: 575px) 100vw, 575px" srcset="https://orca.security/wp-content/uploads/2024/04/image_4d066e.png 575w, https://orca.security/wp-content/uploads/2024/04/image_4d066e.png?resize=379,216 379w" alt="A screenshot from a Cloud Build environment" width="575" height="328" data-wp-init="callbacks.setButtonStyles" data-wp-on--click="actions.showLightbox" data-wp-on--load="callbacks.setButtonStyles" data-wp-on-window--resize="callbacks.setButtonStyles"><button class="lightbox-trigger" type="button" aria-haspopup="dialog" aria-label="Enlarge image: A screenshot from a Cloud Build environment" data-wp-init="callbacks.initTriggerButton" data-wp-on--click="actions.showLightbox" data-wp-style--right="context.imageButtonRight" data-wp-style--top="context.imageButtonTop"></button></figure>
            <figure class="wp-block-image size-full wp-lightbox-container" data-wp-context="{&quot;uploadedSrc&quot;:&quot;https:\/\/orca.security\/wp-content\/uploads\/2024\/04\/image_4b1943.png&quot;,&quot;figureClassNames&quot;:&quot;wp-block-image size-full&quot;,&quot;figureStyles&quot;:null,&quot;imgClassNames&quot;:&quot;wp-image-63696&quot;,&quot;imgStyles&quot;:null,&quot;targetWidth&quot;:798,&quot;targetHeight&quot;:291,&quot;scaleAttr&quot;:false,&quot;ariaLabel&quot;:&quot;Enlarge image: A screenshot from a Cloud Build environment&quot;,&quot;alt&quot;:&quot;A screenshot from a Cloud Build environment&quot;}" data-wp-interactive="core/image"><img class="wp-image-63696" src="https://orca.security/wp-content/uploads/2024/04/image_4b1943.png" sizes="(max-width: 798px) 100vw, 798px" srcset="https://orca.security/wp-content/uploads/2024/04/image_4b1943.png 798w, https://orca.security/wp-content/uploads/2024/04/image_4b1943.png?resize=384,140 384w, https://orca.security/wp-content/uploads/2024/04/image_4b1943.png?resize=780,284 780w, https://orca.security/wp-content/uploads/2024/04/image_4b1943.png?resize=768,280 768w, https://orca.security/wp-content/uploads/2024/04/image_4b1943.png?resize=750,273 750w" alt="A screenshot from a Cloud Build environment" width="798" height="291" data-wp-init="callbacks.setButtonStyles" data-wp-on--click="actions.showLightbox" data-wp-on--load="callbacks.setButtonStyles" data-wp-on-window--resize="callbacks.setButtonStyles"><button class="lightbox-trigger" type="button" aria-haspopup="dialog" aria-label="Enlarge image: A screenshot from a Cloud Build environment" data-wp-init="callbacks.initTriggerButton" data-wp-on--click="actions.showLightbox" data-wp-style--right="context.imageButtonRight" data-wp-style--top="context.imageButtonTop"></button></figure>
            <div class="wp-block-group has-neutral-1-color has-secondary-1-background-color has-text-color has-background has-link-color wp-elements-1e77ee02a423eb1b61b46a8af1460abb is-layout-constrained wp-block-group-is-layout-constrained">
            We won’t elaborate on the Azure CLI example here since Microsoft had already pushed changes to mitigate this issue. However, Azure CLI users are advised to update to the latest Azure CLI version (2.54) and&nbsp;<a href="https://msrc.microsoft.com/blog/2023/11/microsoft-guidance-regarding-credentials-leaked-to-github-actions-logs-through-azure-cli/">follow the steps</a>&nbsp;Microsoft provided to prevent accidental exposure of secrets within CI/CD logs.
            </div>
            &nbsp;</div>		</div>
            </div>`,
        date: 'April 15, 2024',
        number: 6,
        author: {
            name: 'Titus',
            description: 'Titus is a frequent speaker on the blogs.',
            avatar: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2023/09/Titus-92x92-1.jpeg?fit=92%2C92&ssl=1',
            links: {
                facebook: 'https://www.facebook.com',
                twitter: 'https://twitter.com',
                linkedin: 'https://www.linkedin.com',
                pinterest: 'https://www.pinterest.com',
            }
        }
    },
    {
        title: 'DobreTech Institution and University of Buea: Empowering Innovation and Education',
        image: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-04-06-at-4.35.25-PM-15.jpeg?w=1080&ssl=1',
        tags: ['Cloud Computing', 'Cyber Security'],
        text: `<div class="tp-post-content"><ul class="blog__detailslist">
                    <li>Introduction:
                In a strategic move aimed at fostering innovation and enhancing education, DobreTech Tech Institution has joined forces with the prestigious University of Buea. This partnership brings together the expertise of DobreTech, a leading technology institution, and the academic excellence of the University of Buea. This article explores the significance of this collaboration, highlighting the potential for groundbreaking research, technological advancements, and a transformative educational experience.
                <ol>
                    <li>Driving Innovation:
                The partnership between DobreTech and the University of Buea is set to fuel innovation in the region. DobreTech's industry experience and cutting-edge technological knowledge, combined with the University of Buea's academic prowess, create an environment conducive to innovation. Researchers, faculty, and students from both institutions will collaborate on projects that push the boundaries of technology, leading to the development of novel solutions and the advancement of industries in Cameroon and beyond.</li>
                    <li>Research Excellence:
                Through this collaboration, both institutions will pool their resources and expertise to drive impactful research. DobreTech's industry connections and access to state-of-the-art facilities, coupled with the University of Buea's research capabilities and academic rigor, will result in cutting-edge research projects. These endeavors will address critical challenges in various fields, such as artificial intelligence, cybersecurity, renewable energy, and healthcare, contributing to the scientific knowledge base and fostering socio-economic development.</li>
                    <li>Enhanced Learning Opportunities:
                The partnership between DobreTech and the University of Buea will enrich the educational experience for students. The collaboration will offer students access to real-world case studies, internships, and practical training programs at DobreTech. This exposure to industry best practices and hands-on learning will equip students with the skills and knowledge necessary to thrive in the dynamic technology landscape. Additionally, joint seminars, workshops, and guest lectures by industry experts will provide valuable insights and networking opportunities for students.</li>
                    <li>Entrepreneurship and Start-up Support:
                The alliance between DobreTech and the University of Buea will nurture an entrepreneurial ecosystem and support start-up ventures. The institutions will jointly develop entrepreneurship programs, mentorship initiatives, and incubation centers to foster the growth of innovative ideas. Students and researchers will receive guidance and support in transforming their ideas into viable businesses, driving economic growth and job creation in the region.</li>
                    <li>Community Impact:
                The partnership between DobreTech and the University of Buea goes beyond the confines of the institutions themselves. Together, they aim to address societal challenges and contribute meaningfully to the local community. By leveraging technology for social good, the collaboration will develop solutions to pressing issues such as healthcare accessibility, digital inclusion, and sustainable development. The collective efforts of both institutions will have a positive and lasting impact on the lives of individuals and communities in Cameroon.</li>
                </ol>
                Conclusion:
                The partnership between DobreTech Tech Institution and the University of Buea signifies a new era of collaboration in the realm of technology and education. By combining their strengths, these institutions are poised to drive innovation, conduct groundbreaking research, enhance the learning experience, support entrepreneurship, and address societal challenges. This partnership sets a precedent for successful collaborations between tech institutions and universities, demonstrating the transformative power of synergy in advancing technology and education in Cameroon and beyond.</li>
                </ul>
                
                <img class="alignnone wp-image-5370" src="https://dev.dobretech.com/wp-content/uploads/2024/01/partnership-300x129.png" alt="" width="1027" height="442">
                
                &nbsp;</div>`,
        date: 'March 17, 2024',
        number: 2,
        author: {
            name: 'Titus',
            description: 'Titus is a frequent speaker on the blogs.',
            avatar: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2023/09/Titus-92x92-1.jpeg?fit=92%2C92&ssl=1',
            links: {
                facebook: 'https://www.facebook.com',
                twitter: 'https://twitter.com',
                linkedin: 'https://www.linkedin.com',
                pinterest: 'https://www.pinterest.com',
            }
        }
    },
    {
        title: 'Four (4) Cloud Computing Career Paths to Know and Build in 2024',
        tags: ['Cloud Computing'],
        image: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2024/01/job-1.jpg?w=867&ssl=1',
        text: `<div class="tp-post-content"><h2 id="0-what-is-cloud-computing">What is cloud computing?</h2>

        <a href="https://www.coursera.org/articles/what-is-cloud-computing" target="_self" rel="noopener">Cloud computing</a>&nbsp;uses a network of servers accessible via the internet to store, manage, and process data, as well as run applications and software remotely. While on-premise computing solutions require users to be directly connected to a nearby server, cloud computing leverages the internet to enable users to access data from anywhere in the world. This allows organizations to not only work remotely but also to scale their data storage needs as they shift over time.
        
        Cloud computing is used by consumers and organizations every day. Common examples of cloud computing platforms include Google Cloud, Microsoft Azure, and Amazon Web Services (AWS).
        
        <b>Read more:</b>&nbsp;<a href="https://www.coursera.org/articles/aws-vs-azure-vs-google-cloud" target="_self" rel="noopener">What's the Difference Between AWS vs. Azure vs. Google Cloud?</a>
        
        <h3>Cloud computing job outlook</h3>
        
        Cloud computing is a fast-growing field. According to research published on Statista, the worldwide market size for cloud computing applications is projected to reach $168.6 billion by 2025 [<a href="https://www.statista.com/statistics/475670/cloud-applications-market-size-worldwide/" target="_blank" rel="noopener noreferrer">1</a>]. That’s many times higher than the 2013 global market size for cloud computing applications, which sat at just 30.4 billion that year. This quick growth indicates the field can expect similarly positive growth in the coming years.
        
        Overall, as more organizations come to rely on cloud computing technology to accomplish their day-to-day tasks and achieve their business goals, the need for cloud computing professionals only grows.
        
        <h2 id="1-cloud-computing-careers-and-career-paths">Cloud computing careers and career paths</h2>
        
        A career in cloud computing can be both personally and professionally rewarding. In addition to earning a higher-than-average salary, cloud computing professionals get to solve complex computing problems that have a real and important impact on the organizations in which they work.
        
        There’s a lot of room for growth as a cloud computing professional. Below, we lay out the career paths for four different cloud computing careers so you know what to expect.
        
        <b><i>Note:</i></b><i>&nbsp;All salary and career path information taken from Glassdoor as of October 2023 unless otherwise stated.&nbsp;</i>
        
        <h3>1. Cloud engineer</h3>
        
        <a href="https://www.coursera.org/articles/what-is-a-cloud-engineer" target="_self" rel="noopener">Cloud engineers</a>&nbsp;are responsible for building and maintaining an organization’s cloud infrastructure. While their precise duties and responsibilities fluctuate from one organization to another, engineers typically use their cloud computing skills and knowledge of cloud operations to ensure an organization’s cloud infrastructure runs both effectively and efficiently.
        
        Typically, cloud engineers begin their careers as&nbsp;<b>junior cloud engineers</b>&nbsp;before becoming&nbsp;<b>cloud engineers</b>&nbsp;and later occupy more senior roles like&nbsp;<b>cloud engineer II&nbsp;</b>or&nbsp;<b>senior cloud engineer</b>. Typically, each of these positions affords greater responsibility and higher pay, but the precise nature of these duties will vary between organizations and positions.
        
        At a glance, here’s a common career path you may encounter as a cloud engineer, according to Glassdoor [<a href="https://www.glassdoor.com/Career/how-to-become-junior-cloud-engineer_KO14,35.htm" target="_blank" rel="noopener noreferrer">2</a>]:
        
        <div class="rc-Markdown styled rc-ArticleTable">
        <table>
        <thead>
        <tr>
        <th><strong>Job title</strong></th>
        <th><strong>Years of experience</strong></th>
        <th><strong>Salary range</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Junior cloud engineer</td>
        <td>0-1</td>
        <td>$86k - $137k</td>
        </tr>
        <tr>
        <td>Cloud engineer</td>
        <td>2-4</td>
        <td>$92k - $144k</td>
        </tr>
        <tr>
        <td>Cloud engineer II</td>
        <td>2-4</td>
        <td>$110 - $162k</td>
        </tr>
        <tr>
        <td>Lead cloud engineer</td>
        <td>5-7</td>
        <td>$130k - $196k</td>
        </tr>
        </tbody>
        </table>
        </div>
        
        <b>Read more:</b>&nbsp;<a href="https://www.coursera.org/articles/what-is-a-cloud-engineer" target="_self" rel="noopener">What Is a Cloud Engineer? Building and Maintaining the Cloud</a>
        
        <h3>2. Cloud architect</h3>
        
        Cloud architects are responsible for designing the cloud infrastructure used by organizations. Working under IT directors and chief technical officers (CTOs), cloud architects must design cloud systems that support the goals and objectives outlined by the organization and ensure they operate as expected.
        
        Generally, cloud architects work above cloud engineers and represent another career path that engineers may pursue. Due to their responsibilities, cloud architects must have several years of experience to land the job.
        
        Here’s a common career path that you may experience as a cloud architect, according to Glassdoor [<a href="https://www.glassdoor.com/Career/cloud-architect-career_KO0,15.htm" target="_blank" rel="noopener noreferrer">3</a>]:
        
        <div class="rc-Markdown styled rc-ArticleTable">
        <table>
        <thead>
        <tr>
        <th><strong>Job title</strong></th>
        <th><strong>Years of experience</strong></th>
        <th><strong>Salary range</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Junior cloud engineer</td>
        <td>0-1</td>
        <td>$86k - $137k</td>
        </tr>
        <tr>
        <td>Cloud engineer</td>
        <td>2-4</td>
        <td>$92k - $144k</td>
        </tr>
        <tr>
        <td>Cloud engineer II</td>
        <td>2-4</td>
        <td>$110 - $162k</td>
        </tr>
        <tr>
        <td>Cloud architect</td>
        <td>2-4</td>
        <td>$135k - $221k</td>
        </tr>
        </tbody>
        </table>
        </div>
        
        <b>Read more:&nbsp;</b><a href="https://www.coursera.org/articles/how-to-become-a-cloud-architect" target="_self" rel="noopener">How to Become a Cloud Architect: Degrees, Skills, Jobs, Courses</a>
        
        <h3>3. Cloud administrator</h3>
        
        Cloud administrators, or cloud system administrators, maintain an organization’s cloud infrastructure. Cloud administrators work alongside other cloud professionals, such as cloud engineers and architects, to ensure that systems are running smoothly and efficiently.
        
        To become a cloud administrator, you must first start out as a junior cloud administrator or in a related junior position like&nbsp;<a href="https://www.coursera.org/articles/help-desk-technician" target="_self" rel="noopener">help desk technician</a>. Cloud systems administrators can work their way up to more senior positions, such as&nbsp;<b>senior systems administrator</b>&nbsp;or&nbsp;<b>principal systems administrator.</b>
        
        Here’s one possible career path for cloud administrators, according to Glassdoor [<a href="https://www.glassdoor.com/Career/how-to-become-junior-systems-administrator_KO14,42.htm" target="_blank" rel="noopener noreferrer">4</a>]:
        
        <div class="rc-Markdown styled rc-ArticleTable">
        <table>
        <thead>
        <tr>
        <th>__ Job title</th>
        <th>Years of experience</th>
        <th>Salary range __</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Junior system administrator</td>
        <td>0-1</td>
        <td>$62k - $98k</td>
        </tr>
        <tr>
        <td>Systems administrator</td>
        <td>2-4</td>
        <td>$66k - $104k</td>
        </tr>
        <tr>
        <td>Senior systems administrator</td>
        <td>2-4</td>
        <td>$104k - $152k</td>
        </tr>
        <tr>
        <td>Principal systems administrator</td>
        <td>8+</td>
        <td>$118k - $183k</td>
        </tr>
        </tbody>
        </table>
        </div>
        
        <b>Read more:&nbsp;</b><a href="https://www.coursera.org/articles/what-is-a-system-administrator-a-career-guide" target="_self" rel="noopener">What Does a System Administrator Do? Career Guide</a>
        
        <h3>4. Cloud security analyst</h3>
        
        Cloud security analysts, also known as<a href="https://www.coursera.org/articles/information-security-analysts-what-they-do" target="_self" rel="noopener">&nbsp;information security analysts</a>, ensure that an organization’s cloud data is safe from data breaches, unauthorized access, and other&nbsp;<a href="https://www.coursera.org/articles/cloud-data-security" target="_self" rel="noopener">cybersecurity threats</a>. Using their knowledge of data security and cloud computing, security analysts are tasked with monitoring cloud-based systems, developing new safeguards as cloud technology evolves, and resolving cybersecurity threats as they arise.
        
        Generally, college graduates with a degree related to cloud or cybersecurity are qualified for many entry-level roles. In some cases, you may benefit from receiving a&nbsp;<a href="https://www.coursera.org/articles/popular-cybersecurity-certifications" target="_self" rel="noopener">cybersecurity certification</a>&nbsp;related to cloud computing. Afterward, you may progress to more senior-level positions like senior information security analyst or principal information security analyst.
        
        Here’s a possible career path you might consider pursuing as a cloud security analyst, according to Glassdoor [<a href="https://www.glassdoor.com/Career/how-to-become-cloud-security-analyst_KO14,36.htm" target="_blank" rel="noopener noreferrer">5</a>]:
        
        <div class="rc-Markdown styled rc-ArticleTable">
        <table>
        <thead>
        <tr>
        <th><strong>Job title</strong></th>
        <th><strong>Years of experience</strong></th>
        <th><strong>Salary range</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Information security analyst</td>
        <td>2-4</td>
        <td>$78k - $125k</td>
        </tr>
        <tr>
        <td>Senior information security analyst</td>
        <td>2-4</td>
        <td>$105k - $168k</td>
        </tr>
        <tr>
        <td>Principal information security analyst</td>
        <td>8+</td>
        <td>$110k - $176k</td>
        </tr>
        <tr>
        <td>Principal systems administrator</td>
        <td>8+</td>
        <td>$118k - $183k</td>
        </tr>
        </tbody>
        </table>
        </div></div>`,
        date: 'January 15, 2024',
        number: 21,
        author: {
            name: 'Titus',
            description: 'Titus is a frequent speaker on the blogs.',
            avatar: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2023/09/Titus-92x92-1.jpeg?fit=92%2C92&ssl=1',
            links: {
                facebook: 'https://www.facebook.com',
                twitter: 'https://twitter.com',
                linkedin: 'https://www.linkedin.com',
                pinterest: 'https://www.pinterest.com',
            }
        }
    },
    {
        title: 'New Technology Trends',
        image: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2019/05/course6-1.jpg?w=1400&ssl=1',
        tags: ['Cyber Security', 'Development'],
        text: `<div class="tp-post-content">The next technology trend that follows the IoT is 5G. Where 3G and 4G technologies have enabled us to browse the internet, use data driven services, increased bandwidths for streaming on Spotify or YouTube and so much more, 5G services are expected to revolutionize our lives. by enabling services that rely on advanced technologies like AR and VR, alongside cloud based gaming services like Google Stadia, NVidia GeForce Now and much more. It is expected to be used in factories, HD cameras that help improve safety and traffic management, smart grid control and smart retail too.
            Just about every telecom company like Verizon, Tmobile, Apple, Nokia Corp, QualComm, are now working on creating 5G applications. 5G services are expected to launch worldwide in 2021 with more than 50 operators offering services in about&nbsp;<a href="https://5gobservatory.eu/market-developments/5g-services/" target="_blank" rel="noreferrer noopener">30 countries by the end of 2021</a>, making it a new technology trend you must watch out for, and also save a spot in.
            <img class="alignnone wp-image-3754" src="https://dev.dobretech.com/wp-content/uploads/2024/01/5g-1200x600-1-300x150.jpg" alt="" width="1469" height="735">
            &nbsp;</div>`,
        date: 'January 12, 2024',
        number: 20,
        author: {
            name: 'Titus',
            description: 'Titus is a frequent speaker on the blogs.',
            avatar: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2023/09/Titus-92x92-1.jpeg?fit=92%2C92&ssl=1',
            links: {
                facebook: 'https://www.facebook.com',
                twitter: 'https://twitter.com',
                linkedin: 'https://www.linkedin.com',
                pinterest: 'https://www.pinterest.com',
            }
        }
    },
    {
        title: 'Today’s Cybersecurity Industry',
        image: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2019/05/course4-1.jpg?w=1400&ssl=1',
        tags: ['Cyber Security'],
        text: `<div class="tp-post-content">our worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise that different apches to online marketing are becoming available. One of these new approaches is performance or digital performance marketing. Keep reading to learn all about performance marketing, from how it works to it compares to digital marketing. Plus, get insight into the benefits and risks of performance marketing and how itcan affect your company’s long-term success and profitability. Performance marketing is an approach to digitalmarketing or advertising where businesses only pay when a specific result occurs. This result could be a new lead,sale, or other outcome agreed upon by the advertiser and business. Performance marketing involves channels such as affiliate marketing, online advertising.
            <ul class="blog__detailslist">
                <li>Another way to promote reflection, not perfection</li>
                <li>This practice will help students think interdependently</li>
                <li>Self-reflection requires courage and patience</li>
                <li>Teaching students to be self-reflective will give them a skill</li>
            </ul>
            <h2>Favorite Writers for Middle School Students</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit tincidunt iaculis eget interdum pretium ullamcorper est dui, donec feugiat at etiam aliquam ornare parturient ut convallis gravida malesuada netus commodo hendrerit lorem sed imperdiet praesent consectetur fermentum.
            <ul class="blog__detailslist">
                <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li>
                <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</li>
                <li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
                <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</li>
            </ul>
            <img class="aligncenter size-full wp-image-4943" src="https://eduquest.itech-theme.com/wp-content/uploads/2019/05/course1-2.jpg" alt="" width="1500" height="1000">
            <h2>Education Research You Can Use</h2>
            The end of the school year is always a time full of excitement, joy, and oodles of
            
            elf-reflection requires courage and patience. Teaching students to be self-reflective will give them a skill that will help them throughout their lives in whatever path they choose.
            <h2>Keep Up With Education Research</h2>
            Supported substance consolidates parts of web based promoting and substance showcasing. It includes making substance, for example, a blog entry or video and paying for its consideration on a site that routinely distributes comparative substance. A piece of supported substance will seem to be like the remainder of the substance on the site yet will incorporate some sign that it’s supported. With execution showcasing, you would pay a pre-decided aps on your supported article navigates to your site from the article.
            
            Supported substance consolidates parts of web based promoting and substance showcasing. It includes making substance, for example, a blog entry or video and paying for its consideration on a site that routinely distributes comparative substance. A piece of supported substance will seem to be like the remainder of the substance on the site yet will incorporate some sign that it’s supported. With execution showcasing, you would pay a pre-decided aps on your supported article navigates to your site from the article.</div>`,
        date: 'January 12, 2024',
        number: 12,
        author: {
            name: 'Titus',
            description: 'Titus is a frequent speaker on the blogs.',
            avatar: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2023/09/Titus-92x92-1.jpeg?fit=92%2C92&ssl=1',
            links: {
                facebook: 'https://web.facebook.com/people/Dobre-Technologies/100067183329468/',
                twitter: 'https://twitter.com/DobreTechnolog1',
                linkedin: 'https://www.linkedin.com/company/dobretech',
                pinterest: 'https://www.instagram.com/dobretech/',
            }
        }
    },
    {
        title: 'Internet Of Things (IOT)',
        image: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2019/05/course7-1.jpg?resize=768%2C472&ssl=1',
        tags: ['Design', 'Development'],
        text: `<div class="tp-post-content">Another promising new technology trend is IoT. Many “things” are now being built with WiFi connectivity, meaning they can be connected to the Internet—and to each other. Hence, the Internet of Things, or IoT. The&nbsp;<a href="https://www.simplilearn.com/what-is-iot-how-and-why-it-matters-article" target="_blank" rel="noreferrer noopener">Internet of Things</a>&nbsp;is the future, and has already enabled devices, home appliances, cars and much more to be connected to and exchange data over the Internet.

            As consumers, we’re already using and benefitting from IoT. We can lock our doors remotely if we forget to when we leave for work and preheat our ovens on our way home from work, all while tracking our fitness on our Fitbits. However,&nbsp;<a href="https://www.simplilearn.com/ways-businesses-use-iot-article" target="_blank" rel="noreferrer noopener">businesses&nbsp;</a>also have much to gain now and in the near future. The IoT can enable better safety, efficiency and decision-making for businesses as data is collected and analyzed. It can enable predictive maintenance, speed up medical care, improve customer service, and offer benefits we haven’t even imagined yet.
            
            And we’re only in the beginning stages of this new technology trend: Forecasts suggest that by 2030 around&nbsp;<a href="https://www.statista.com/statistics/802690/worldwide-connected-devices-by-access-technology/" target="_blank" rel="noreferrer noopener">50 billion&nbsp;</a>of these IoT devices will be in use around the world, creating a massive web of interconnected devices spanning everything from smartphones to kitchen appliances. The global spending on the Internet of Things (IoT) is forecast to reach&nbsp;<a href="https://www.statista.com/statistics/668996/worldwide-expenditures-for-the-internet-of-things/" target="_blank" rel="noreferrer noopener">1.1 trillion U.S. dollars in 2022.</a>&nbsp;New technologies such as 5G is expected to drive market growth in the coming years.
            
            And if you wish to step foot in this trending technology, you will have to learn about Information security,&nbsp;<a href="https://www.simplilearn.com/skillup-free-online-courses#AI-&amp;-Machine-Learning" target="_blank" rel="noreferrer noopener">AI and machine learning fundamentals</a>, networking, hardware interfacing,&nbsp;<a href="https://www.simplilearn.com/learn-data-analytics-for-beginners-skillup" target="_blank" rel="noreferrer noopener">data a</a><a href="https://www.simplilearn.com/learn-data-analytics-for-beginners-skillup" target="_blank" rel="noreferrer noopener">nalytics</a><a href="https://www.simplilearn.com/learn-data-analytics-for-beginners-skillup" target="_blank" rel="noreferrer noopener">, automation, understanding of embedded systems, and must have device and design knowledge</a>.
            
            &nbsp;
            
            <img class="alignnone wp-image-4310" src="https://dev.dobretech.com/wp-content/uploads/2021/07/Iot-300x176.jpg" alt="" width="1372" height="805">
        
            &nbsp;</div>`,
        date: 'January 12, 2024',
        number: 10,
        author: {
            name: 'Titus',
            description: 'Titus is a frequent speaker on the blogs.',
            avatar: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2023/09/Titus-92x92-1.jpeg?fit=92%2C92&ssl=1',
            links: {
                facebook: 'https://web.facebook.com/people/Dobre-Technologies/100067183329468/',
                twitter: 'https://twitter.com/DobreTechnolog1',
                linkedin: 'https://www.linkedin.com/company/dobretech',
                pinterest: 'https://www.instagram.com/dobretech/',
            }
        }
    },
    {
        title: 'Computing Technology For The Consulting',
        image: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2019/05/course1-1-1.jpg?w=1400&ssl=1',
        tags: ['Design'],
        text: `<div class="tp-post-content">At an industry level, technology has done two things. First, it has introduced a complete new field of work, commonly bundled under the label ‘digital transformation’. This segment is the fastest growing segment of the consulting sector and according to estimates from Source Global Research it is now worth around one fifth of the entire industry in mature markets. Clients are embracing technologies such as artificial intelligence, robotics, automation and internet of things to gain competitive advantages, and in doing so, tapping the expertise of consultants who stand at the forefront of such developments.

            Second, the growing role of technology has blurred the lines between traditional consulting work and technology work. A decade ago, there was a clear cut between consulting work (project-based, value-adding advisory based), technology consulting work (project-based tasks such as systems implementation) and non-consulting technology consulting work (more routine tasks such as application development and maintenance). With digital now at the heart of innovation and performance improvement, consulting firms are delivering much more technology work, and are extending their services into a realm previously classified as non-consulting. Consultancies now work with clients to design and develop apps, prototypes and intelligent systems, among other areas.
            
            <img class="alignnone wp-image-4761" src="https://dev.dobretech.com/wp-content/uploads/2024/01/a1-300x270.png" alt="" width="1222" height="1100">
            
            The global consulting market is in the process of being reorganised itself,” said Rousset, “due to the growing diversification of the activities of consultancy firms.” This development is however not just a consequence of technology – the industry is making similar moves branching into others fields of professional services, including design thinking, marketing &amp; advertising and engineering.
            
            Technology is also making an impact in consulting firms' own internal operations. Unsurprisingly, firms are embedding automation in their own processes to improve primary activities such as project management, resourcing and activities for client engagements, but also secondary processes such as finance, human resources and internal reporting. It is helping consulting firms scale, manage and connect with their talent more easily.
            
            At the same time, the rise of digital is also a threat for the operation of consultancies. Technology is allowing consulting firms to operate in a more agile manner, as illustrated by the rise of digital-driven networks of consultants or groups of independent consultants. These collectives use technology to team up more effectively, while others have used technology to enable digital matching platforms. These user-friendly apps can assemble teams of consultants with a few simple swipes on a smart-phone.
            <h2></h2></div>`,
        date: 'January 12, 2024',
        number: 30,
        author: {
            name: 'Titus',
            description: 'Titus is a frequent speaker on the blogs.',
            avatar: 'https://i0.wp.com/dobretech.com/wp-content/uploads/2023/09/Titus-92x92-1.jpeg?fit=92%2C92&ssl=1',
            links: {
                facebook: 'https://web.facebook.com/people/Dobre-Technologies/100067183329468/',
                twitter: 'https://twitter.com/DobreTechnolog1',
                linkedin: 'https://www.linkedin.com/company/dobretech',
                pinterest: 'https://www.instagram.com/dobretech/',
            }
        }
    }
]