export const gameRS = {
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
};