export const itHub = {
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
};