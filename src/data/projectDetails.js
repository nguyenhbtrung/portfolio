export const projectDetails = {
    'it-hub': {

    },
    'gtg-shop': {

    },
    'game-rc': {

    },
};

export const projects = [
    {
        slug: 'it-hub',
        title: 'IT Hub',
        description: 'A modern e-learning platform designed for IT student, with AI-powered learning assistant.',

        demoUrl: 'https://ithub.vercel.app/',
        sourceUrl: 'https://github.com/nguyenhbtrung/it-hub',

        gallery: [
            {
                name: 'https://ithub.vercel.app',
                image: '/projectImages/it-hub/home.png'
            },
            {
                name: 'https://ithub.vercel.app',
                image: '/projectImages/it-hub/home2.png'
            },
            {
                name: 'https://ithub.vercel.app/courses/:slug',
                image: '/projectImages/it-hub/course-detail.png'
            },
            {
                name: 'https://ithub.vercel.app/courses/:slug/learn/steps/:id',
                image: '/projectImages/it-hub/learning.png'
            },
            {
                name: 'https://ithub.vercel.app/courses/:slug/learn/steps/:id',
                image: '/projectImages/it-hub/learning2.png'
            },
            {
                name: 'https://ithub.vercel.app/courses/:slug/learn/steps/:id',
                image: '/projectImages/it-hub/learning3.png'
            },
            {
                name: 'https://ithub.vercel.app/categories/:slug',
                image: '/projectImages/it-hub/categories.png'
            },
            {
                name: 'https://ithub.vercel.app/search?query',
                image: '/projectImages/it-hub/search.png'
            },
            {
                name: 'https://ithub.vercel.app/instructor',
                image: '/projectImages/it-hub/instructor-dashboard.png'
            },
            {
                name: 'https://ithub.vercel.app/instructor/courses',
                image: '/projectImages/it-hub/instructor-courses.png'
            },
            {
                name: 'https://ithub.vercel.app/instructor/courses/:id/edit',
                image: '/projectImages/it-hub/course-edit.png'
            },
            {
                name: 'https://ithub.vercel.app/instructor/courses/:id/edit/content',
                image: '/projectImages/it-hub/course-edit-content.png'
            },
            {
                name: 'https://ithub.vercel.app/instructor/courses/:id/edit/content/steps/:id',
                image: '/projectImages/it-hub/course-edit-content-step.png'
            },
            {
                name: 'https://ithub.vercel.app/admin',
                image: '/projectImages/it-hub/admin.png'
            },
        ],

        overview: {
            title: 'Technical Overview',
            icon: 'analytics',
            paragraphs: [
                'IT Hub is a E-Learning web platform that enables instructors to create structured IT courses while providing students with an engaging learning experience through progress tracking and interactive content.',

                'The platform adopts a modern architecture using Next.js, Node.js (Express), PostgreSQL, and Redis, with scalable file management supporting both local storage and Cloudinary for media delivery.',

                'A Gemini-powered AI assistant understands from lecture-level to course-level context, allowing students to ask questions and receive accurate, context-aware explanations directly within the learning experience.'
            ],
            specs: [
                {
                    label: 'Frontend',
                    value: 'Next.js 16'
                },
                {
                    label: 'Backend',
                    value: 'Node.js'
                },
                {
                    label: 'Database',
                    value: 'PostgreSQL'
                },
                {
                    label: 'Deployment',
                    value: 'Vercel / Render'
                },
            ],
            highlight:
                'Modern LMS with AI-assisted learning, scalable architecture, and rich course authoring tools.'
        },

        features: [
            {
                icon: 'school',
                title: 'Course Management',
                description:
                    'Create and manage categories, courses, lessons, exercises, and structured learning content.'
            },
            {
                icon: 'edit',
                title: 'Rich Content Editor',
                description:
                    'Build interactive lessons with images, videos, code blocks, callouts, and formatted content.'
            },
            {
                icon: 'autoAwesome',
                title: 'AI Learning Assistant',
                description:
                    'Gemini-powered chatbot provides context-aware explanations based on lectures and courses.'
            },
            {
                icon: 'trendingUp',
                title: 'Learning Progress',
                description:
                    'Track enrollments, learning progress, and student performance for instructors and learners.'
            },
            {
                icon: 'adminPanelSettings',
                title: 'Multi-role Platform',
                description:
                    'Dedicated dashboards for students, instructors, and administrators with role-based workflows.'
            },
            {
                icon: 'cloudUpload',
                title: 'Media Management',
                description:
                    'Support secure uploads, media streaming, and thumbnails through Cloudinary-based file storage.'
            }
        ],

        techStack: {
            title: 'Technology Stack',
            description:
                'A modern full-stack ecosystem powering scalable course management, AI integration, and responsive user experiences.',
            technologies: [
                'Next.js',
                'React',
                'Material UI',
                'Node.js',
                'Express.js',
                'PostgreSQL',
                'Prisma',
                'Redis',
                'Zustand',
                'NextAuth',
                'Gemini API',
                'Cloudinary'
            ]
        },

        metrics: [
            {
                label: "AVAILABILITY",
                value: "99.9%",
                description: "Uptime SLA"
            },
            {
                label: "SYNCHRONIZATION",
                value: "<200ms",
                description: "Latency"
            },
            {
                label: "OPTIMIZATION",
                value: "98",
                description: "Lighthouse Score"
            }
        ],

        secondaryCTA: {
            title: 'Explore IT Hub',
            description:
                'Discover the live platform, browse the source code, and experience a modern AI-powered learning environment.'
        }
    },
    {
        slug: 'gtg-shop',
        title: 'GTG Shop',
        description:
            'A cross-platform e-commerce solution for electronic devices with secure payments and real-time features.',

        demoUrl: 'https://gtgshop.vercel.app/',
        sourceUrl: 'https://github.com/nguyenhbtrung/electro-shop',

        gallery: [
            {
                name: 'https://gtgshop.vercel.app',
                image: '/projectImages/gtg-shop/customers/home.png'
            },
            {
                name: 'https://gtgshop.vercel.app',
                image: '/projectImages/gtg-shop/customers/add-to-card.png'
            },
            {
                name: 'https://gtgshop.vercel.app/product',
                image: '/projectImages/gtg-shop/customers/product.png'
            },
            {
                name: 'https://gtgshop.vercel.app/product',
                image: '/projectImages/gtg-shop/customers/product2.png'
            },
            {
                name: 'https://gtgshop.vercel.app/cart',
                image: '/projectImages/gtg-shop/customers/cart.png'
            },
            {
                name: 'https://gtgshop.vercel.app/orders',
                image: '/projectImages/gtg-shop/customers/orders.png'
            },
            {
                name: 'https://gtgshop.vercel.app/returns/request',
                image: '/projectImages/gtg-shop/customers/return-request.png'
            },
            {
                name: 'https://gtgshop.vercel.app/history',
                image: '/projectImages/gtg-shop/customers/history.png'
            },
            {
                name: 'https://gtgshop.vercel.app/categories',
                image: '/projectImages/gtg-shop/customers/categories.png'
            },
            {
                name: 'https://gtgshop.vercel.app/brands',
                image: '/projectImages/gtg-shop/customers/brands.png'
            },
            {
                name: 'https://gtgshop.vercel.app/search',
                image: '/projectImages/gtg-shop/customers/search.png'
            },
            {
                name: 'https://gtgshop.vercel.app/profile',
                image: '/projectImages/gtg-shop/customers/profile.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin',
                image: '/projectImages/gtg-shop/customers/admin-dashboard.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/users',
                image: '/projectImages/gtg-shop/customers/admin-users.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/chats',
                image: '/projectImages/gtg-shop/customers/admin-chats.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/products',
                image: '/projectImages/gtg-shop/customers/admin-products.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/products',
                image: '/projectImages/gtg-shop/customers/admin-products2.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/categories',
                image: '/projectImages/gtg-shop/customers/admin-categories.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/attributes',
                image: '/projectImages/gtg-shop/customers/admin-attributes.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/brands',
                image: '/projectImages/gtg-shop/customers/admin-brands.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/stockimports',
                image: '/projectImages/gtg-shop/customers/admin-stockimports.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/suppliers',
                image: '/projectImages/gtg-shop/customers/admin-suppliers.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/orders',
                image: '/projectImages/gtg-shop/customers/admin-orders.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/returns',
                image: '/projectImages/gtg-shop/customers/admin-returns.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/discounts',
                image: '/projectImages/gtg-shop/customers/admin-discounts.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/discounts',
                image: '/projectImages/gtg-shop/customers/admin-discounts2.png'
            },
            {
                name: 'https://gtgshop.vercel.app/admin/vouchers',
                image: '/projectImages/gtg-shop/customers/admin-vouchers.png'
            },
        ],

        overview: {
            title: 'Technical Overview',
            icon: 'analytics',
            paragraphs: [
                'GTG Shop is a cross-platform e-commerce solution for electronic retail. It delivers responsive web and Android experiences backed by scalable REST APIs, secure authentication, and flexible database support.',

                'The backend was built with ASP.NET Core and Entity Framework Core, supporting both SQL Server and PostgreSQL while integrating JWT authentication, SignalR real-time messaging, VNPay payments, and configurable image storage.',

                'As team leader, I coordinated five members while contributing to backend APIs, frontend development, Android modules, and system architecture to deliver a complete cross-platform shopping ecosystem.'
            ],
            specs: [
                {
                    label: 'Platforms',
                    value: 'Web & Android'
                },
                {
                    label: 'Backend',
                    value: 'ASP.NET Core (.NET 8)'
                },
                {
                    label: 'Database',
                    value: 'PostgreSQL / SQL Server'
                },
                {
                    label: 'Deployment',
                    value: 'Vercel / Render'
                }
            ],
            highlight:
                'Cross-platform e-commerce solution with secure payments, real-time support, and modern architecture.'
        },

        features: [
            {
                icon: 'shoppingCart',
                title: 'Complete Storefront',
                description:
                    'Browse products with categories, brands, keyword search, browsing history, and promotional banners.'
            },
            {
                icon: 'shield',
                title: 'Secure Authentication',
                description:
                    'JWT authentication with role-based authorization for separate customer and administrator workflows.'
            },
            {
                icon: 'payments',
                title: 'Online Payments',
                description:
                    'Integrated VNPay sandbox payment gateway to simulate complete online purchasing and checkout flows.'
            },
            {
                icon: 'chat',
                title: 'Real-time Support',
                description:
                    'SignalR-powered customer support chat enables instant communication between customers and staff.'
            },
            {
                icon: 'inventory',
                title: 'Admin Management',
                description:
                    'Manage products, categories, brands, orders, suppliers, returns, banners, discounts, vouchers, and users.'
            },
            {
                icon: 'phoneAndroid',
                title: 'Android Client',
                description:
                    'Native Android application built with Jetpack Compose sharing the same backend services as the web.'
            }
        ],

        techStack: {
            title: 'Technology Stack',
            description:
                'A modern cross-platform technology stack combining robust backend services, responsive web development, and native Android technologies.',
            technologies: [
                'ASP.NET Core',
                'Entity Framework Core',
                'PostgreSQL',
                'SQL Server',
                'React',
                'Material UI',
                'SignalR',
                'JWT',
                'Jetpack Compose',
                'Retrofit',
                'VNPay'
            ]
        },

        metrics: [
            {
                label: "AVAILABILITY",
                value: "99.9%",
                description: "Uptime SLA"
            },
            {
                label: "SYNCHRONIZATION",
                value: "<50ms",
                description: "Latency"
            },
            {
                label: "OPTIMIZATION",
                value: "93",
                description: "Lighthouse Score"
            }
        ],

        secondaryCTA: {
            title: 'Explore the Complete Platform',
            description:
                'Discover the source code, architecture, and cross-platform implementation behind GTG Shop.'
        },
    },
    {
        slug: 'game-rc',
        title: 'Game Recommendation System (2024)',
        description: 'A demo website that provides recommendations for related games as users browse through different games.',

        demoUrl: 'https://gamers.pythonanywhere.com/',
        sourceUrl: 'https://github.com/yakciJ/Game-Recommendation-System',

        gallery: [
            {
                name: 'https://gamers.pythonanywhere.com',
                image: '/projectImages/game-rc/home.png'
            },
            {
                name: 'https://gamers.pythonanywhere.com',
                image: '/projectImages/game-rc/home2.png'
            },
            {
                name: 'https://gamers.pythonanywhere.com/product',
                image: '/projectImages/game-rc/product.png'
            },
            {
                name: 'https://gamers.pythonanywhere.com/product',
                image: '/projectImages/game-rc/product2.png'
            },
            {
                name: 'https://gamers.pythonanywhere.com/search',
                image: '/projectImages/game-rc/search.png'
            },
        ],

        overview: {
            title: 'Technical Overview',
            icon: 'analytics',
            paragraphs: [
                'This Django-based recommendation platform combines content-based filtering with collaborative filtering to deliver personalized game suggestions through a lightweight web interface.',

                'The application loads precomputed TF-IDF features, game metadata, and user mappings from local pickle files or GitHub Releases, reducing runtime computation while keeping recommendations responsive.',

                'Besides recommendation pages, the system exposes JSON endpoints for search, product details, and user rating persistence, making it suitable for learning and prototyping recommender systems.'
            ],
            specs: [
                {
                    label: 'Framework',
                    value: 'Django'
                },
                {
                    label: 'Database',
                    value: 'SQLite'
                },
                {
                    label: 'Recommendation',
                    value: 'Content + Collaborative'
                },
                {
                    label: 'Data Source',
                    value: 'Pickle / GitHub Releases'
                }
            ],
            highlight:
                'Hybrid recommendation engine with flexible data loading for fast demonstrations and experiments.'
        },

        features: [
            {
                icon: 'hub',
                title: 'Hybrid Recommendation',
                description:
                    'Combines content-based and collaborative filtering to recommend similar games.'
            },
            {
                icon: 'search',
                title: 'Game Search',
                description:
                    'Search games by title and quickly access detailed product pages with recommendations.'
            },
            {
                icon: 'star',
                title: 'Rating Persistence',
                description:
                    'Allows users to save ratings that can be used to improve collaborative recommendations.'
            }
        ],

        techStack: {
            title: 'The Stack',

            description:
                'A lightweight Python technology stack focused on building and serving a hybrid recommendation engine.',

            technologies: [
                'Python',
                'Django',
                'SQLite',
                'Pandas',
                'NumPy',
                'Scikit-learn',
                'TF-IDF',
                'Pickle',
                'HTML',
                'CSS',
                'JavaScript'
            ]
        },

        metrics: [
            {
                label: "GAMES",
                value: "84K+",
                description: "Steam Titles"
            },
            {
                label: "RATINGS",
                value: "160K+",
                description: "User Interactions"
            },
            {
                label: "VOCABULARY",
                value: "400+",
                description: "TF-IDF Terms"
            },
        ],

        secondaryCTA: {
            title: 'Explore the Recommendation Engine',
            description:
                'Browse the live demo or inspect the source code to learn how the hybrid recommendation system works.'
        },
    }
];