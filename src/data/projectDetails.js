import projects from './projects';

const shuffle = (array) => {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array
}

const projectDetails = [
        {
        singleProjectHeader: {
            singleProjectTitle: 'PTTLNG',
            singleProjectDate: '6 May, 2025 - Present',
            singleProjectTag: 'Web Application / Booking System / Recruitment system',
        },
        projectImages: [
            {
                id: 1,
                title: 'PTTLNG - Calendar Lecturer booking page',
                img: '',
            },
            {
                id: 2,
                title: 'PTTLNG Visitor - Calendar Walkin booking page',
                img: '',
            },
            {
                id: 3,
                title: 'PTTLNG Visitor - Calendar PTTLNG employee booking page',
                img: '',
            },
            {
                id: 4,
                title: 'PTTLNG Visitor - Email recieve booking infomation',
                img: '',
            },
            {
                id: 5,
                title: 'PTTLNG Visitor - Excel booking infomation',
                img: '',
            },
            {
                id: 6,
                title: 'PTTLNG Career - Application form for recruitmebnt page',
                img: '',
            },
            {
                id: 7,
                title: 'PTTLNG Career - Recruitment data management page',
                img: '',
            },
            {
                id: 8,
                title: 'PTTLNG Career - Email recieve application form',
                img: '',
            },
            {
                id: 9,
                title: 'PTTLNG Career - PDF application form report',
                img: '',
            },
            {
                id: 10,
                title: 'PTTLNG Career - Excel form report',
                img: '',
            },
            {
                id: 11,
                title: 'PTTLNG - Condolence form page',
                img: '',
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Orange Technology so.ltd',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Fix Booking system, Recruitment system and clear customer requirement',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://www.pttlng.com/',
                },
                {
                    id: 4,
                    title: 'Visitor Rank',
                    details: 'B+',
                },
                {
                    id: 5,
                    title: 'Career Rank',
                    details: 'A',
                },
                {
                    id: 6,
                    title: 'Status',
                    details: 'Career (Closed) / Visitor (In progress)',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                "Protect server and database from previous issue and develop new booking system for 4 type booking and visitor that can manage booking with calendar system and email notification to customer and admin. Fixed recruitment system with internship and applicant that can manage application form online and send email notification to applicant with company format and fix data on report in pdf and excel file.",
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'C#/.Net .Net Framework',
                        'MS SQL Server',
                        'Radmin',
                        'Entra ID',
                        'Line OA',
                        'IText7',
                        'NPOI',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Use entra id for employee login system that can connect to company entra id server to authenticate user login with secure and safe for all employee in company. and must support outlook canlendar system to sync booking data with outlook calendar for easy manage booking schedule.',
                },
                {
                    id: 2,
                    details:
                        'Used line OA show booking information to customer when booking is confirmed and remind booking schedule before booking date to reduce no show booking and increase customer satisfaction with easy access to booking information via line application.',
                },
                {
                    id: 3,
                    details:
                        'Fix calendar booking system for support 4 type booking such as lecturer booking, walkin booking, pttlng employee booking and tour booking with calendar view that can see booking schedule in each month, week and day. The calendar system can add, edit and delete booking with validate booking date and time to avoid double booking and customize calendar by lecturer group and employee.',
                },
                {
                    id: 4,
                    details:
                        'Created dashboard admin page that can manage all booking data in one place with calendar system to see booking schedule and status in each day. The dashboard must support filter booking data by date, type booking for easy manage booking information accordingly.',
                },
                {
                    id: 5,
                    details:
                        'Managed applicant the mostly data with recruitment system that can create application form online for internship and applicant with validate form data before submit application. The system can send email notification to applicant when application is submitted successfully and notify admin when new application is received.',
                },
                {
                    id: 6,
                    details:
                        'Provided position text on report system that can generate report in pdf for easily read.',
                }
            ]
        }
    },
    {
        singleProjectHeader: {
            singleProjectTitle: 'TOA Multi - Track Player',
            singleProjectDate: '18 April, 2025 - 10 January, 2026',
            singleProjectTag: 'Window Application / Multimedia Player',
        },
        projectImages: [
            {
                id: 1,
                title: 'TOA Multi - Track Player main program',
                img: '',
            },
            {
                id: 2,
                title: 'TOA Multi - Track Player Timer page',
                img: '',
            },
            {
                id: 3,
                title: 'TOA Multi - Track Player remote control page',
                img: '',
            },
            {
                id: 4,
                title: 'TOA Multi - Track Player admin setting page',
                img: '',
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Orange Technology so.ltd',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Create Multi-track player for connect to Centralize server remote and clear customer requirement',
                },
                {
                    id: 4,
                    title: 'Rank',
                    details: 'S',
                },
                {
                    id: 5,
                    title: 'Status',
                    details: 'Closed',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                "To develop a desktop application for 8-channel multi-track audio playback that connects each device to a centralized server for remote control and management. The application will provide a user-friendly interface, support multiple audio formats, enable efficient playback and scheduling, and be suitable for commercial resale.",
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'C#/.Net .Net Framework',
                        'NAudio',
                        'MP3Gain',
                        'Web Socket',
                        'Postman',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Play music in 8 channel with support audio file format mp3, wav at 44.1 kHz and can control volume, music mode such as loop and random in each channel with NAudio library. The program can set route audio to output device that connected to computer such as headphone, speaker and audio interface with customer requirement.',
                },
                {
                    id: 2,
                    details:
                        'Fixed Timer system that can schedule play music in each channel with set time to start and stop music playback. The timer system can set multiple timers in each channel and manage timer list with edit, delete and add new timer features.',
                },
                {
                    id: 3,
                    details:
                        'Make api to connect to centralize server that can send and receive command to control music playback in each channel such as play, pause, stop, next, previous and volume control, manage files in each playlist. The program can update status music playback to server in real-time and receive command from server to control music playback accordingly must consistency at all.',
                },
                {
                    id: 4,
                    details:
                        'Upload playlist for play music must support file format mp3 and wav with validate file type and file size before add to playlist. The program can manage playlist with add, delete, edit and reorder music in playlist features.',
                },
                {
                    id: 5,
                    details:
                        'Add Auto gain control feature that can normalize audio level in each track to consistent volume level using MP3Gain library. The auto gain control can set target volume level and apply to all music in playlist before playback to ensure optimal listening experience for all tracks.',
                },
                {
                    id: 6,
                    details:
                        'Program installation that can setup program in computer with easy and fast installation process. The installer must include all necessary files and dependencies to run the program without additional configuration for all user program.',
                }
            ]
        }
    },
    {
        singleProjectHeader: {
            singleProjectTitle: 'PAT - Report Pro',
            singleProjectDate: '18 April, 2025 - Pesent',
            singleProjectTag: 'Window Application / Mesuring Monitoring System',
        },
        projectImages: [
            {
                id: 1,
                title: 'PAT - Report Pro main window',
                img: '',
            },
            {
                id: 2,
                title: 'PAT - Report Pro report page',
                img: '',
            },
            {
                id: 3,
                title: 'PAT - Report Pro report online preview page',
                img: '',
            },
            {
                id: 4,
                title: 'PAT - Report Pro report portable preview page',
                img: '',
            },
            {
                id: 5,
                title: 'PAT - Report Pro license key page',
                img: '',
            },
            {
                id: 6,
                title: 'PAT - Report Pro Component page',
                img: '',
            },
            {
                id: 7,
                title: 'PAT - Report Pro Measuring point page',
                img: '',
            },
            {
                id: 8,
                title: 'PAT - Report Pro Techname page',
                img: '',
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Orange Technology so.ltd',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Create Monitoring application, Report system and clear customer requirement',
                },
                {
                    id: 4,
                    title: 'Rank',
                    details: 'A',
                },
                {
                    id: 5,
                    title: 'Status',
                    details: 'In progress',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'To develop a desktop application for monitoring and measuring system in under SPM Instrument Program (Condmaster ruby), generating detailed reports in type online, airius and portable, and providing real-time data visualization in each data table. The application should offer a user-friendly interface, support various data formats, and facilitate efficient data management and analysis.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'C#/.Net .Net Framework',
                        'Condmaster Ruby SPM Instrument',
                        'CES API',
                        'IText7'
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Implemented customizable program experience for any users by creating license key system that can manage license key with customer information to cennected to condmaster api and product version with expiration date to access the application features accordingly.',
                },
                {
                    id: 2,
                    details:
                        'Developed report generation system that can create report in 3 type online, airius and portable with detail format that customer required. The report system can export report in pdf file and print out directly from the application with condmaster api.',
                },
                {
                    id: 3,
                    details:
                        'Developed measuring monitoring system that can connect to SPM instrument condmaster ruby via CES API to get real-time data and display in each data table. The system can manage measuring point and techname with customer requirement and show data in grid view with sorting, filtering and searching features for easy data analysis.',
                }
            ]
        }
    },
    {
        singleProjectHeader: {
            singleProjectTitle: 'Pokungpao (Pinklao)',
            singleProjectDate: '24 March, 2025 - Present',
            singleProjectTag: 'Web Application / Booking System / E-commerce',
        },
        projectImages: [
            {
                id: 1,
                title: 'Pokungpao main website',
                img: '',
            },
            {
                id: 2,
                title: 'Pokungpao booking page',
                img: '',
            },
            {
                id: 3,
                title: 'Pokungpao select table page',
                img: '',
            },
            {
                id: 4,
                title: 'Pokungpao payment page',
                img: '',
            },
            {
                id: 5,
                title: 'Pokungpao backend table page',
                img: '',
            },
            {
                id: 6,
                title: 'Pokungpao backend table booking detail page',
                img: '',
            },
            {
                id: 7,
                title: 'Pokungpao backend custom table page',
                img: '',
            },
            {
                id: 8,
                title: 'Pokungpao backend display image page',
                img: '',
            },
            {
                id: 9,
                title: 'Pokungpao backend concert manage page',
                img: '',
            },
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Orange Technology so.ltd',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Create Booking application and clear customer requirement',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://porpinklao.com/Home/Login',
                },
                {
                    id: 4,
                    title: 'Rank',
                    details: 'A',
                },
                {
                    id: 5,
                    title: 'Status',
                    details: 'Waiting',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'To develop an online booking table position for concern pubbar and event booking system that enables users to reserve tables, participate in events, and track their reservations. The platform should provide a user-friendly interface, support various multimedia formats, and facilitate interaction between customers and restaurant staff.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'C#/.Net (ASP.Net)',
                        'MS SQL Server',
                        'Chillpay Payment Gateway',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Implemented a fixed template layout for large-screen image display in the pub bar area, supported by a backend management page that allows administrators to upload and manage displayed content. The system supports customer payment display templates and sequential image playback with smooth transitions and configurable display durations to enhance the overall ambiance.',
                },
                {
                    id: 2,
                    details:
                        'Customized table booking system featuring an interactive seat map that allows users to select and reserve specific table locations within the restaurant. The solution includes a fully responsive design to ensure optimal usability across all devices and screen sizes, real-time status updates for available and restricted tables visible to all registered users, and zone-based table filtering for each concert or event opening.',
                },
                {
                    id: 3,
                    details:
                        'Creating table page that can check table status at realtime that can filter by date and any concert event and can see table at details.',
                },
                {
                    id: 4,
                    details:
                        'Create payment system that updates payment status form chillpay payment gateway from pending to paid when customer has completed the payment process successfully.',
                },
            ]
        }
    },
    {
        singleProjectHeader: {
            singleProjectTitle: 'Ilearning (GoFSi)',
            singleProjectDate: '3 Marth, 2025 - 17 April, 2025 and 9 Sep, 2025',
            singleProjectTag: 'Web Application / Course Online',
        },
        projectImages: [
            {
                id: 1,
                title: 'Ilearn main website',
                img: '',
            },
            {
                id: 2,
                title: 'Ilearn course page',
                img: '',
            },
            {
                id: 3,
                title: 'Ilearn course overview page',
                img: '',
            },
            {
                id: 4,
                title: 'Backend scoring system page',
                img: '',
            },
            {
                id: 5,
                title: 'Backend survey result page',
                img: '',
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Orange Technology so.ltd',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Create Course Online application and clear customer requirement',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://ilearn.arm.orangestudio.club/Home/Index',
                },
                {
                    id: 4,
                    title: 'Rank',
                    details: 'B+',
                },
                {
                    id: 5,
                    title: 'Status',
                    details: 'Closed',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'To develop an online learning platform that enables users to access educational content, participate in courses, and track their progress. The platform should provide a user-friendly interface, support various multimedia formats, and facilitate interaction between instructors and learners.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'C#/.Net (ASP.Net)',
                        'MS SQL Server',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Frontend: Creating chat page with real-time messaging using SignalR for instant communication between users and instructors. Implementing responsive design to ensure optimal user experience across various devices and screen sizes. Integrating multimedia content such as videos, quizzes, and interactive elements to enhance the learning experience. Developing a user-friendly interface for course navigation, progress tracking, and user profiles.',
                },
                {
                    id: 2,
                    details:
                        'Backend: To Manage Scoring system to customer requirement and design database structure for efficient data storage and retrieval. Implementing Controller for seamless communication between frontend and backend pages. Ensuring data security and user authentication to protect sensitive information. Optimizing performance for handling a large number of concurrent users and course content delivery.',
                },
            ]
        }
    },
    {
        singleProjectHeader: {
            singleProjectTitle: 'Gofive Product',
            singleProjectDate: '2 Sep, 2024 - 27 Dec, 2024',
            singleProjectTag: 'LucA / Card Inventory / RFID Face recogination',
        },
        projectImages: [
            {
                id: 1,
                title: 'LucA console',
                img: require('@/assets/images/projects/7-Gofive-Evidence1.png'),
            },
            {
                id: 2,
                title: 'LucA main',
                img: require('@/assets/images/projects/7-Gofive-Evidence2.png'),
            },
            {
                id: 3,
                title: 'LucA file progress',
                img: require('@/assets/images/projects/7-Gofive-Evidence3.png'),
            },
            {
                id: 4,
                title: 'Stock report excel',
                img: require('@/assets/images/projects/7-Gofive-Evidence4.png'),
            },
            {
                id: 5,
                title: 'Stock report pdf',
                img: require('@/assets/images/projects/7-Gofive-Evidence5.png'),
            },
            {
                id: 6,
                title: 'Face recogination testing',
                img: require('@/assets/images/projects/7-Gofive-Evidence6.png'),
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Gofive',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Securities operation system, Backend development',
                },
                {
                    id: 3,
                    title: 'Rank',
                    details: 'S',
                },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'To design print layouts and develop software for verifying the accuracy of printed securities and other document types, ensuring precise and timely delivery to clients while optimizing the production process. Additionally, to support card production by generating comprehensive reports summarizing results.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'C#/.Net (ASP.Net)',
                        'MS SQL Server',
                        "Python (opercv2)",
                        '.Net Framework',
                        'Inspire Design (PNet)',
                        'Rabbit MQ',
                        "Azure DevOps",
                        "Swagger"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'LucA: To design print layouts and develop software for verifying the accuracy of printed securities and other document types, ensuring precise and timely delivery to clients while optimizing the production process. Additionally, to support card production by generating comprehensive reports summarizing results.',
                },
                {
                    id: 2,
                    details:
                        'LucA: To manage sales and client communication by coordinating the development of new printing products for securities. This involves transforming the data into a format suitable for production, followed by client approval and testing of print positions. The process includes thorough QA checks and system integration via Unit Tests. Ensuring accuracy at every stage is crucial for the successful creation of the product.',
                },
                {
                    id: 3,
                    details:
                        'LucA: To resolve bugs or errors in the system through data control by identifying the root cause and reporting it to the management. In some cases, this may require fixing issues within the system or addressing discrepancies in the clien\'s data.',
                },
                {
                    id: 4,
                    details:
                        'PNet: To utilize the specialized software, Inspire Designer, for designing and editing print layouts that serve as templates for printing. This program supports handling large volumes of client data for each product, ensuring efficient and scalable production.',
                },
                {
                    id: 5,
                    details:
                        'LucA: In the securities work for SCBS, the Balance Statement is generated by consolidating data from multiple files. This requires developing a new class to handle the integration of data from various sources and modifying the system to support the efficient production of print files. The system is designed to produce over 600,000 sets per year within a fast turnaround time, ensuring accurate and timely output.',
                },
                {
                    id: 6,
                    details:
                        'Card Inventory: To create an API for generating Excel reports and integrate it with the requirements provided by the Project Manager. The API should ensure consistency in the data and feed the results into a dashboard for easy tracking and visualization of key metrics and progress.',
                },
                {
                    id: 7,
                    details:
                        'RFID Face Recogination: To develop a Python-based face detection system utilizing RFID and a research-specific model to achieve an accuracy rate above 99%. The system should effectively detect faces and generate summary results, incorporating advanced techniques for improved face recognition and prediction.',
                }
            ]
        }
    },
    {
        singleProjectHeader: {
            singleProjectTitle: 'Leafy',
            singleProjectDate: '8 Aug, 2023 - 29 Apr, 2024',
            singleProjectTag: 'Web Application / Machine Learning / Backend Development / Database Administrator',
        },
        projectImages: [
            {
                id: 1,
                title: 'Shop Page',
                img: require('@/assets/images/projects/1-Leafy.png'),
            },
            {
                id: 2,
                title: 'Product Detail Page',
                img: require('@/assets/images/projects/1-Leafy-1.png'),
            },
            {
                id: 3,
                title: 'Review & Recommender Page',
                img: require('@/assets/images/projects/1-Leafy-2.png'),
            },
            {
                id: 4,
                title: 'Order Page',
                img: require('@/assets/images/projects/1-Leafy-3.png'),
            },
            {
                id: 5,
                title: 'Profile Page',
                img: require('@/assets/images/projects/1-Leafy-4.png'),
            },
            {
                id: 6,
                title: 'Gallery Content Page',
                img: require('@/assets/images/projects/1-Leafy-5.png'),
            },
            {
                id: 7,
                title: 'Gallery List Page',
                img: require('@/assets/images/projects/1-Leafy-6.png'),
            },
            {
                id: 8,
                title: 'Product Creation Page',
                img: require('@/assets/images/projects/1-Leafy-7.png'),
            },
            {
                id: 9,
                title: 'Supplier Order Page',
                img: require('@/assets/images/projects/1-Leafy-8.png'),
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'KMUTT',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Fullstack Development, Recommender System, Infrastructure',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://seniorproject.sit.kmutt.ac.th/showproject/IT63-BU62',
                },
                {
                    id: 4,
                    title: 'Github',
                    details: 'https://github.com/orgs/leafy-shop/repositories',
                },
                 {
                    id: 5,
                    title: 'Note',
                    details: 'This is senior projects portfolio use SIT D-day boost for showing and presenting archivements.',
                },
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Leafy is a Web Application for online trading of gardening and gardening products, which facilitates the general public who likes and is interested in planting trees and gardening design. look like Shopee platform',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'CSS',
                        "Node.js (Express.js)",
                        'Prisma.js',
                        'MySQL',
                        'Minio',
                        'Docker',
                        'Git',
                        "Nginx"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Made features recommender system to recommend products who like or interest with user, product and rating review by using content-based filtering like weight ranking model on Node.js.',
                },
                {
                    id: 2,
                    details:
                        'Made product customization with item in each SKU. Make sure seller can refill stock and change price in each SKU and detail.',
                },
                {
                    id: 3,
                    details:
                        'Made product list who can filter, sort data and made into pagination list before response into dynamic web browser.',
                },
                {
                    id: 4,
                    details:
                        'Made cart and order list with multiple store who can add item on cart in each group store or place on order with item and address. check status in each order in store before paid, prepared package, transited, received item and reviewed with optional.',
                },
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 2,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 3,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 4,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== 1)).slice(0,4)
        },
    },
    {
        singleProjectHeader: {
            singleProjectTitle: 'IT Help Desk',
            singleProjectDate: '31 May 2023 - 4 Aug, 2023',
            singleProjectTag: 'Web Application / Dashboard / Full-stack development / Database Administrator',
        },
        projectImages: [
            {
                id: 1,
                title: 'Issue & Trouble Shooting Page',
                img: require('@/assets/images/projects/2-ITHelpDesk.png')
            },
            {
                id: 2,
                title: 'Admin Issue Page',
                img: 'https://ik.imagekit.io/iytkpg49r/Portfolio/Other/2-ITHelpDesk-1.png' //require('@/assets/images/projects/2-ITHelpDesk-1.png')
            },
            {
                id: 3,
                title: 'Home Page',
                img: require('@/assets/images/projects/2-ITHelpDesk-2.png')
            },
            {
                id: 4,
                title: 'Issue Summarization Page',
                img: require('@/assets/images/projects/2-ITHelpDesk-3.png')
            },
            {
                id: 5,
                title: 'Admin Dashboard Page',
                img: require('@/assets/images/projects/2-ITHelpDesk-4.png')
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Moral center (Public Organization)',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Fullstack Development, Power BI, IT Support',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Moral IT Helpdesk is web application who use to notify or request issue about hardware trouble shooting and media. When admin has requested from notification system, they fix issue and response to user and organization. So every user who get fix the data on dashboard that summarize for understand about issue and resolution about organization',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'Tailwind CSS',
                        "Node.js (Express.js)",
                        'mysql 2',
                        'MySQL',
                        'Google Firebase',
                        'Power BI',
                        "Power Automate",
                        'Docker',
                        'Git',
                        "Nginx"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Made notification system for user request in Admin service.',
                },
                {
                    id: 2,
                    details:
                        'Use Power BI for summarize user admin data by auto refresh and Show on admin page.',
                },
                {
                    id: 3,
                    details:
                        'Made recommendation articles service with upload file in each session, and show sequence data.',
                }
            ]
        }
    },

    {
        singleProjectHeader: {
            singleProjectTitle: 'Google Certificate Salifort Motors Company - Why employee left?',
            singleProjectDate: 'August, 2023 - December, 2023',
            singleProjectTag: 'Explorational Data Analysis / Dashboard / Machine Learning / Hypothesis testing',
        },
        projectImages: [
            {
                id: 1,
                title: 'Excutive summary',
                img: require('@/assets/images/projects/3-SalifortMotors.png')
            },
            {
                id: 2,
                title: 'EDA',
                img: require('@/assets/images/projects/3-SalifortMotors-1.png')
            },
            {
                id: 3,
                title: 'Dashboard',
                img: require('@/assets/images/projects/3-SalifortMotors-2.png')
            },
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Google Certificate program by KMUTT and AIS data team',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Data insight, Excutive summary report, Dashboard, Hypothesis testing, Predict left employee',
                },
                {
                    id: 3,
                    title: 'Github',
                    details: 'https://github.com/sahathat/GoogleCertADA',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Moral IT Helpdesk is web application who use to notify or request issue about hardware trouble shooting and media. When admin has requested from notification system, they fix issue and response to user and organization. So every user who get fix the data on dashboard that summarize for understand about issue and resolution about organization',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Tableau',
                        'Jupyter lab',
                        "Tensorflow"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Found optimize result when predict class left employee with each model assumption and use feature engineering in detail.',
                },
                {
                    id: 2,
                    details:
                        'In model use follow by Logistic regression, Decision tree, Random forest tree and Artificial neural network',
                },
                {
                    id: 3,
                    details:
                        'Used Tableau for describing and summarizing why employee saliforted left?',
                },
                {
                    id: 4,
                    details:
                        'Implement the insight data for storytelling and improving decision in organization',
                }
            ]
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== 3)).slice(0,4)
        },
    },

    {
        singleProjectHeader: {
            singleProjectTitle: 'OASIP (Online Appointment Scheduling System For Integrated Project Clinics)',
            singleProjectDate: 'April, 2022 - December, 2022',
            singleProjectTag: 'Frontend web development/ Backend web development',
        },
        projectImages: [
            {
                id: 1,
                title: 'Home Page',
                img: require('@/assets/images/projects/4-OASIP.png')
            },
            {
                id: 2,
                title: 'login Page',
                img: require('@/assets/images/projects/4-OASIP-1.png')
            },
            {
                id: 3,
                title: 'Reservation Page',
                img: require('@/assets/images/projects/4-OASIP-2.png')
            },
            {
                id: 4,
                title: 'Reservation Detail Page',
                img: require('@/assets/images/projects/4-OASIP-3.png')
            },
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'KMUTT',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Backend development, Dev Ops with intregation',
                },
                {
                    id: 3,
                    title: 'Github',
                    details: 'https://github.com/sahathat/OASIP-AT-3',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'OASIP (Online Appointment Scheduling System For Integrated Project Clinics) is web application for reservation lecturer who need to consult the issue and solving the problem',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'BootStrap',
                        'Java (Spring Boot)',
                        "MySQL",
                        "Docker",
                        "Git",
                        "Nginx"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Validated time non-overlap',
                },
                {
                    id: 2,
                    details:
                        'Used spring security implement to authentication and authorization in each role such as student, lecturer and admin',
                }
            ]
        }
    },

    {
        singleProjectHeader: {
            singleProjectTitle: 'CSGO winner classification',
            singleProjectDate: 'November, 2023 - December, 2023',
            singleProjectTag: 'Machine Learning, Simple Report',
        },
        projectImages: [
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Google Certificate program by KMUTT and AIS data team',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Machine Learning',
                },
                {
                    id: 3,
                    title: 'Github',
                    details: 'https://github.com/sahathat/dataSci/blob/main/Bigdata/projects/Group9_Report-Group9.pdf',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Predict wining team by using some features have the most important in each sample round for predict class team and evaluation scoring by compared accuracy and time with normal python and pyspark',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Jupyter lab',
                        "PySpark"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Used python and pyspark to consistency.',
                },
                {
                    id: 2,
                    details:
                        'Used Neural Network like Multi layer perceptron to predict wining class and evaluation metric',
                }
            ]
        }
    },
    {
        singleProjectHeader: {
            singleProjectTitle: 'SIT hello world - Submarine',
            singleProjectDate: 'October, 2020 - November, 2020',
            singleProjectTag: 'Game development',
        },
        projectImages: [
            {
                id: 1,
                title: 'Menu',
                img: require('@/assets/images/projects/6-helloworld.png')
            },
            {
                id: 2,
                title: 'Gameplay 1',
                img: require('@/assets/images/projects/6-helloworld-1.png')
            },
            {
                id: 3,
                title: 'Gameplay 2',
                img: require('@/assets/images/projects/6-helloworld-2.png')
            },
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'KMUTT',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Game development',
                },
                {
                    id: 3,
                    title: 'Github',
                    details: 'https://github.com/Hello-Dolphin/hellodolphin-gameproject-8/tree/master?tab=readme-ov-file',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develop game development for playing as role submarine and will pass obstacles before find treasure at the end',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Phaser3.js',
                        'Yarn',
                        "Nginx",
                        "Docker"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Implemented game image and sprite from designer to make movement and animation',
                },
                {
                    id: 2,
                    details:
                        'Developed game to interesting and response to user with any page',
                }
            ]
        }
    }
];

function addIncrementingIds(projectArray) {
    return projectArray.map((project, index) => ({
        id: index + 1, // Add an `id` property starting from 1
        ...project,
        socialSharingsHeading: 'Share This',
        socialSharings: [
            {
                id: 1,
                name: 'Instagram',
                icon: 'instagram',
                url: 'https://instagram.com/',
            },
            {
                id: 2,
                name: 'Facebook',
                icon: 'facebook',
                url: 'https://facebook.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'linkedin',
                url: 'https://linkedin.com/',
            },
            {
                id: 4,
                name: 'Youtube',
                icon: 'youtube',
                url: 'https://www.youtube.com/',
            },
        ],
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== index + 1)).slice(0,4)
        },
	}));
}
  
const updatedProjectDetails = addIncrementingIds(projectDetails);

export default updatedProjectDetails;
