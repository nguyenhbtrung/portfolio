import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
// import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import SectionHeading from '../SectionHeading';
import MotionBox from '../MotionBox';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
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