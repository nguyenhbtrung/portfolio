import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
// import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import SectionHeading from './SectionHeader';
import MotionBox from './MotionBox';
import ProjectCard from './ProjectCard';

const projects = [
  {
    slug: 'it-hub',
    category: 'Website / E-Learning',
    title: 'IT Hub',
    description:
      'A modern e-learning platform designed for IT student, with AI-powered learning assistant.',
    image: '/projectImages/it-hub/home.png',
    liveDemo: 'https://ithub.vercel.app/',
    tags: [
      'Next.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Material UI',
      'Gemini API',
    ],
  },
  {
    slug: 'gtg-shop',
    category: 'Web & Mobile / E-Commerce',
    title: 'GTG Shop',
    description:
      'A cross-platform e-commerce solution for electronic devices with secure payments and real-time features.',
    image: '/projectImages/gtg-shop/customers/home.png',
    liveDemo: 'https://gtgshop.vercel.app/',
    tags: [
      'ASP.NET Core',
      'React',
      'PostgreSQL',
      'SignalR',
      'Jetpack Compose',
      'Material UI',
    ],
  },
  {
    slug: 'game-rc',
    category: 'Website / Recomendation System',
    title: 'Game Recommendation System (2024)',
    description:
      'A demo website that provides recommendations for related games as users browse through different games.',
    image: '/projectImages/game-rc/home.png',
    liveDemo: 'https://gamers.pythonanywhere.com/',
    tags: [
      'Django',
      'Numpy',
      'Pandas',
      'Scikit-learn',
    ],
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
      py={8}
    >
      <SectionHeading align="center">
        Featured Projects
      </SectionHeading>

      <Typography
        align="center"
        color="text.secondary"
        mb={3}
        gutterBottom
      >
        A selection of projects that demonstrate my technical skills,
        problem-solving ability, and passion for software development.
      </Typography>


      <Grid container spacing={4} mt={6}>
        {projects.map((project, index) => (
          <Grid
            key={project.slug}
            size={{
              xs: 12,
              md: 6,
              lg: 4,
            }}
          >
            <MotionBox height='100%' transition={{ delay: index * 0.1}}>
              <ProjectCard project={project} />
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}