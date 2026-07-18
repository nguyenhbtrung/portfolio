export const gtgShop = {
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
};